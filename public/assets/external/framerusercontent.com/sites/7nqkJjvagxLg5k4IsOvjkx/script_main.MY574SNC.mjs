import {
  B as C,
  O as L,
  P as M,
  S as U,
  ba as V,
  ka as x,
  o as l,
  p as v,
  q as b,
  s as k,
  t as I,
  u as w,
  v as P,
  w as B,
  x as S,
  z as D,
} from "./chunk-YIFMDBR7.mjs";
import {
  L as f,
  h as d,
  l as R,
  m as h,
  n as y,
  p as g,
  v as F,
  w as _,
  y as E,
} from "./chunk-XE4JPNOO.mjs";
import "./chunk-JR5VT52U.mjs";
import { c as r } from "./chunk-RIUMFBNJ.mjs";
var Q = "default" in f ? E : f,
  m = {},
  O = Q;
m.createRoot = O.createRoot;
m.hydrateRoot = O.hydrateRoot;
var H = m.createRoot,
  N = m.hydrateRoot;
var p = {
    augiA20Il: {
      elements: { lQwvt9U0q: "header" },
      page: l(
        () =>
          import("./3hPK3XE04wryBP1XrBZjN1BXd9Ff35MczjeJdw3uLRU.NEMT2OHL.mjs"),
      ),
      path: "/",
    },
  },
  T = [{ code: "en-US", id: "default", name: "English", slug: "" }];
async function J({ routeId: a, pathVariables: s, localeId: c }) {
  await p[a].page.preload();
  let e = d(U, {
      isWebsite: !0,
      routeId: a,
      pathVariables: s,
      routes: p,
      collectionUtils: {},
      framerSiteId:
        "0f0bd14607b07923f31ffbafc4ce85e0fe9ee5f451f0f8c64d70746794703f7b",
      notFoundPage: l(() => import("./SitesNotFoundPage.js@1.1-AKLIVZ4J.mjs")),
      isReducedMotion: void 0,
      localeId: c,
      locales: T,
      preserveQueryParams: void 0,
      EditorBar:
        typeof r > "u"
          ? void 0
          : l(async () => {
              let [{ createPortal: u }, { createEditorBar: t }] =
                await Promise.all([
                  import("./npm_react-dom@18.2-ZNYFIDUQ.mjs"),
                  import("https://edit.framer.com/init.mjs"),
                ]);
              return {
                default: t({
                  dependencies: {
                    __version: 1,
                    framer: {
                      useCurrentRoute: b,
                      useLocaleInfo: I,
                      useRouter: v,
                    },
                    react: {
                      createElement: d,
                      memo: R,
                      useCallback: y,
                      useEffect: g,
                      useRef: F,
                      useState: _,
                    },
                    "react-dom": { createPortal: u },
                  },
                }),
              };
            }),
    }),
    i = d(L, {
      children: e,
      value: {
        codeBoundaries: !1,
        editorBarCloseAfterLogin: !1,
        editorBarMenu: !0,
        enableAsyncURLUpdates: !0,
        replaceNestedLinks: !0,
        useGranularSuspense: !0,
        wrapUpdatesInTransitions: !0,
      },
    }),
    o = d(M, { children: i });
  return d(k, { children: o, value: { routes: {} } });
}
var W = typeof document < "u";
if (W) {
  ((r.__framer_importFromPackage = (s, c) => () =>
    d(D, {
      error: 'Package component not supported: "' + c + '" in "' + s + '"',
    })),
    (r.process = {
      ...r.process,
      env: { ...(r.process ? r.process.env : void 0), NODE_ENV: "production" },
    }),
    (r.__framer_events = r.__framer_events || []),
    C());
  let a = document.getElementById("main");
  "framerHydrateV2" in a.dataset ? G(!0, a) : G(!1, a);
}
function j() {
  W && r.__framer_events.push(arguments);
}
async function G(a, s) {
  function c(e, i, o = !0) {
    if (e.caught || r.__framer_hadFatalError) return;
    let n = i?.componentStack;
    if (o) {
      if (
        (console.warn(
          `Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches:
`,
          e,
          n,
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        "Fatal crash during hydration. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/",
      );
    j(
      o ? "published_site_load_recoverable_error" : "published_site_load_error",
      {
        message: String(e),
        componentStack: n,
        stack: n
          ? void 0
          : e instanceof Error && typeof e.stack == "string"
            ? e.stack
            : null,
      },
    );
  }
  try {
    let e, i, o, n;
    if (a) {
      let t = JSON.parse(s.dataset.framerHydrateV2);
      ((e = t.routeId),
        (i = t.localeId),
        (o = t.pathVariables),
        (n = t.breakpoints));
    } else {
      let t = S(p, decodeURIComponent(location.pathname), !0, T);
      ((e = t.routeId), (i = t.localeId), (o = t.pathVariables));
    }
    let u = await J({ routeId: e, localeId: i, pathVariables: o });
    a
      ? (x("framer-rewrite-breakpoints", () => {
          (V(n), r.__framer_onRewriteBreakpoints?.(n));
        }),
        h(() => {
          (B(), P(), w(), N(s, u, { onRecoverableError: c }));
        }))
      : H(s, { onRecoverableError: c }).render(u);
  } catch (e) {
    throw (c(e, void 0, !1), e);
  }
}
export { J as getPageRoot };
//# sourceMappingURL=script_main.MY574SNC.mjs.map
