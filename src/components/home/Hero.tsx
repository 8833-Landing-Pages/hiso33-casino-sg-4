import { motion } from "framer-motion";
import { heroCopy, trustBadges } from "./content";

const heroImage = "/assets/external/framerusercontent.com/images/f5rCZIPfJIqwxYy3MvR5UfKCcA4.png";
const heroBg = "/assets/external/framerusercontent.com/images/MDcboGwjL8BVj0BY09i0n40VRQ.jpg";
const heroBadge = "/assets/external/framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-20 lg:flex-row lg:items-start lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center lg:text-left"
        >
          <div className="mb-6 flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-start">
            <div className="rounded-2xl border border-gold-400/40 bg-black/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur">
              <img
                src={heroBadge}
                alt={`${heroCopy.brand} logo`}
                className="h-14 w-auto max-w-[140px] object-contain drop-shadow-[0_0_18px_rgba(184,142,58,0.45)]"
              />
            </div>
            <p className="font-heading text-sm uppercase tracking-[0.4em] text-gold-200/80">
              {heroCopy.tagline}
            </p>
          </div>
          <h1 className="font-display text-6xl leading-none text-gold-200 sm:text-7xl lg:text-8xl">
            {heroCopy.titleLine1}
            <span className="block text-gold-400 drop-shadow">{heroCopy.titleLine2}</span>
          </h1>
          <p className="mt-4 font-body text-lg text-gold-100/80 sm:text-xl">
            {heroCopy.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="/register-success"
              className="rounded-full border border-gold-400 bg-gradient-to-b from-wine-700 to-wine-900 px-8 py-3 font-heading text-lg uppercase tracking-widest text-gold-100 shadow-glow"
            >
              {heroCopy.ctaPrimary}
            </a>
            <a
              href="/register-success"
              className="rounded-full border border-gold-400/50 px-6 py-3 font-heading text-sm uppercase tracking-[0.3em] text-gold-200/90"
            >
              {heroCopy.ctaSecondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex w-full max-w-md items-center justify-center"
        >
          <div className="absolute -top-8 right-6 h-24 w-24 rounded-full bg-gold-400/30 blur-2xl" />
          <img
            src={heroImage}
            alt="HISO33 hero"
            className="relative z-10 w-full max-w-sm drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
          {/*<img*/}
          {/*  src={heroBadge}*/}
          {/*  alt=""*/}
          {/*  className="absolute -left-10 top-24 h-32 w-32 rounded-full border border-gold-400/40 bg-black/40"*/}
          {/*/>*/}
        </motion.div>
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 pb-12 pt-4 text-center text-xs uppercase tracking-[0.3em] text-gold-100/70 sm:grid-cols-4">
        {trustBadges.map((badge) => (
          <div
            key={badge.label}
            className="rounded-full border border-gold-400/30 bg-black/40 px-4 py-2"
          >
            {badge.label}
          </div>
        ))}
      </div>
    </section>
  );
}
