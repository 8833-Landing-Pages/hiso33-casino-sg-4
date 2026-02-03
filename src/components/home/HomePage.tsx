import { motion } from "framer-motion";
import { Faq } from "./Faq";
import { Footer } from "./Footer";
import { GameCarousel } from "./GameCarousel";
import { Hero } from "./Hero";
import { Highlights } from "./Highlights";
import { PromoCarousel } from "./PromoCarousel";

export function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold-200/70">
              Elite Promotions
            </p>
            <h2 className="mt-3 font-display text-4xl text-gold-200">
              Rewards Crafted for High Society
            </h2>
            <p className="mt-4 text-sm text-gold-100/70">
              Unlock curated bonus lines, VIP access, and premium rewards curated
              for Singapore&apos;s top players.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-gold-400/20 bg-black/60 p-6"
          >
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-gold-200/70">
              Featured Package
            </p>
            <h3 className="mt-4 font-display text-3xl text-gold-200">
              SGD 33 + 1x Turnover
            </h3>
            <p className="mt-3 text-sm text-gold-100/70">
              Low rollover, instant crediting, exclusive VIP entry.
            </p>
          </motion.div>
        </div>
        <div className="mt-10">
          <PromoCarousel />
        </div>
      </section>

      <Highlights />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-200/70">
            Game Floor
          </p>
          <h2 className="mt-3 font-display text-4xl text-gold-200">
            Signature Rooms & Legendary Tables
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-gold-100/70">
            Explore live dealer experiences, elite slots, and curated sports
            markets designed for premium stakes.
          </p>
        </div>
        <div className="mt-10">
          <GameCarousel />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[32px] border border-gold-400/30 bg-gradient-to-r from-wine-900/80 via-black/80 to-black/90 p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold-200/70">
                Private Lounge
              </p>
              <h2 className="mt-4 font-display text-4xl text-gold-200">
                Personalized Service, Elite Results
              </h2>
            </div>
            <p className="text-sm text-gold-100/70">
              Dedicated account managers, bespoke bonuses, and curated VIP events
              built for Singapore&apos;s most discerning players.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              "Instant Deposits",
              "Priority Withdrawals",
              "Luxury Rewards",
              "Private Events",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-gold-400/30 bg-black/50 px-5 py-2 text-xs uppercase tracking-[0.3em] text-gold-100/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <Footer />
    </div>
  );
}
