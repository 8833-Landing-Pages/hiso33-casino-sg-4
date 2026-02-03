const footerLinks = [
  "Live Chat",
  "WhatsApp",
  "Email",
  "Terms",
  "Responsible Gaming",
];

export function Footer() {
  return (
    <footer className="border-t border-gold-400/20 bg-wine-900/70">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-sm text-gold-100/70 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-gold-200">HISO33</p>
          <p className="mt-3">
            Premium casino entertainment crafted for Singapore&apos;s elite.
          </p>
        </div>
        <div>
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold-200/70">
            Concierge
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold-200/70">
            Social
          </p>
          <div className="mt-4 flex gap-3">
            {["FB", "IG", "YT", "X"].map((item) => (
              <span
                key={item}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gold-400/20 py-4 text-center text-xs text-gold-100/50">
        Copyright © 2017-2026 HISO33. All rights reserved.
      </div>
    </footer>
  );
}
