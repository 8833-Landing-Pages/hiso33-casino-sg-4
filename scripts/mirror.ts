import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { URL } from "url";

const ASSETS_JSON_PATH = path.resolve("src/mirror/assets.json");
const SNAPSHOTS_DIR = path.resolve("src/mirror/snapshots");
const PUBLIC_ASSETS_DIR = path.resolve("public");
const PAGES_DIR = path.resolve("src/pages");

// Ensure directories exist
if (!fs.existsSync(PUBLIC_ASSETS_DIR))
  fs.mkdirSync(PUBLIC_ASSETS_DIR, { recursive: true });
if (!fs.existsSync(PAGES_DIR)) fs.mkdirSync(PAGES_DIR, { recursive: true });

// Read assets list
const assets = JSON.parse(fs.readFileSync(ASSETS_JSON_PATH, "utf-8"));

async function downloadFile(url: string, destPath: string) {
  return new Promise<{ ok: boolean; status?: number }>((resolve) => {
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const file = fs.createWriteStream(destPath);
    const protocol = url.startsWith("https") ? https : http;

    protocol
      .get(url, (response) => {
        if (response.statusCode === 200) {
          response.pipe(file);
          file.on("finish", () => {
            file.close();
            resolve({ ok: true, status: response.statusCode });
          });
        } else if (
          response.statusCode &&
          response.statusCode >= 300 &&
          response.statusCode < 400 &&
          response.headers.location
        ) {
          // handle redirect simple
          downloadFile(response.headers.location, destPath).then(resolve);
        } else {
          file.close();
          fs.unlink(destPath, () => {}); // Delete partial file
          console.warn(`Failed to download ${url}: ${response.statusCode}`);
          resolve({ ok: false, status: response.statusCode }); // resolve anyway to continue
        }
      })
      .on("error", (err) => {
        fs.unlink(destPath, () => {});
        console.error(`Error downloading ${url}: ${err.message}`);
        resolve({ ok: false });
      });
  });
}

// 1. Download Assets
console.log("Downloading assets...");
const failedAssets = new Set<string>();
for (const assetPath of assets) {
  let url = assetPath;

  // Normalize URL
  if (!url.startsWith("http")) {
    url = new URL(url, "https://www.hiso33.casino/").href;
  }

  // Determine local path for SAVING (strip query params)
  let localPath = assetPath;
  if (localPath.startsWith("http")) {
    try {
      const u = new URL(localPath);
      if (u.pathname === "/" || u.pathname === "") {
        console.log(`Skipping root URL asset: ${localPath}`);
        continue;
      }
      localPath = path.join(
        "assets",
        "external",
        u.hostname,
        decodeURIComponent(u.pathname),
      );
    } catch (e) {
      console.error(`Invalid URL: ${localPath}`);
      continue;
    }
  } else {
    // Remove query params from local filename if present
    let clean = decodeURIComponent(localPath);
    const qIdx = clean.indexOf("?");
    if (qIdx !== -1) clean = clean.substring(0, qIdx);
    const hIdx = clean.indexOf("#");
    if (hIdx !== -1) clean = clean.substring(0, hIdx);
    localPath = clean;
  }

  // Ensure relative path
  if (localPath.startsWith("/")) localPath = localPath.substring(1);

  const dest = path.join(PUBLIC_ASSETS_DIR, localPath);
  // console.log(`Downloading ${url} -> ${localPath}`);
  const result = await downloadFile(url, dest);
  if (!result.ok) {
    failedAssets.add(assetPath);
  }
}

// 2. Process Snapshots and Generate Astro Pages
console.log("Generating Astro pages...");
const snapshots = fs
  .readdirSync(SNAPSHOTS_DIR)
  .filter((f) => f.endsWith(".html"));

for (const snap of snapshots) {
  const content = fs.readFileSync(path.join(SNAPSHOTS_DIR, snap), "utf-8");

  let newContent = content;

  // We need to match the ORIGINAL string in HTML (with query params)
  // and replace it with the NEW local path (without query params, root relative).

  for (const assetPath of assets) {
    if (failedAssets.has(assetPath)) {
      newContent = newContent.split(assetPath).join("");
      continue;
    }
    let original = assetPath;
    // Determine what the replacement path SHOULD be (clean local path)
    let replacement = assetPath;

    if (assetPath.startsWith("http")) {
      try {
        const u = new URL(assetPath);
        const decodedPath = decodeURIComponent(u.pathname);
        replacement =
          "/" + path.join("assets", "external", u.hostname, decodedPath);

        const relativeWithQuery = `${u.pathname}${u.search}${u.hash}`;
        const candidates = new Set<string>([
          assetPath,
          relativeWithQuery,
          u.pathname,
          decodedPath,
        ]);
        for (const candidate of candidates) {
          if (candidate && candidate !== replacement) {
            newContent = newContent.split(candidate).join(replacement);
          }
        }
        continue;
      } catch (e) {
        continue;
      }
    } else {
      // Relative path
      let clean = decodeURIComponent(assetPath);
      const qIdx = clean.indexOf("?");
      if (qIdx !== -1) clean = clean.substring(0, qIdx);
      const hIdx = clean.indexOf("#");
      if (hIdx !== -1) clean = clean.substring(0, hIdx);

      if (!clean.startsWith("/")) {
        replacement = "/" + clean;
      }
    }

    // Replace in content.
    newContent = newContent.split(original).join(replacement);
  }

  const pageName = snap.replace(".html", "");
  const astroPageDir =
    pageName === "index" ? PAGES_DIR : path.join(PAGES_DIR, pageName);

  if (pageName !== "index" && !fs.existsSync(astroPageDir)) {
    fs.mkdirSync(astroPageDir, { recursive: true });
  }

  const astroFile =
    pageName === "index"
      ? path.join(PAGES_DIR, "index.astro")
      : path.join(astroPageDir, "index.astro");

  const escapedContent = newContent
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$/g, "\\$");
  const astroContent = `---
---
<Fragment set:html={\`${escapedContent}\`} />
`;

  fs.writeFileSync(astroFile, astroContent);
  console.log(`Generated ${astroFile}`);
}

console.log("Mirroring complete.");
