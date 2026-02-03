import { faqItems } from "./content";

export function Faq() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold-200/70">
          Knowledge Vault
        </p>
        <h2 className="mt-4 font-display text-4xl text-gold-200">
          Elite Access FAQ
        </h2>
      </div>
      <div className="mt-10 space-y-4">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="rounded-2xl border border-gold-400/20 bg-black/60 p-6"
          >
            <summary className="cursor-pointer list-none font-heading text-lg text-gold-100">
              {item.question}
            </summary>
            <p className="mt-3 text-sm text-gold-100/70">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
