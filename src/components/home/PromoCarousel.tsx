import { EmblaCarousel } from "./EmblaCarousel";
import { promoCards } from "./content";

export function PromoCarousel() {
  const slides = promoCards.map((promo) => (
    <div
      key={promo.title}
      className="group h-full rounded-3xl border border-gold-400/30 bg-gradient-to-b from-black/70 via-black/90 to-wine-900/70 p-8 text-left shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-gold-200/70">
        Exclusive Offer
      </p>
      <h3 className="mt-4 font-display text-3xl text-gold-200">
        {promo.title}
      </h3>
      <p className="mt-3 text-sm text-gold-100/70">{promo.description}</p>
      <button className="mt-6 rounded-full border border-gold-400/60 px-6 py-2 font-heading text-xs uppercase tracking-[0.3em] text-gold-100 transition group-hover:bg-gold-400/20">
        {promo.cta}
      </button>
    </div>
  ));

  return <EmblaCarousel slides={slides} />;
}
