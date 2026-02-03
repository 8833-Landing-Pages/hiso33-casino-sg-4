import { EmblaCarousel } from "./EmblaCarousel";
import { gameCategories } from "./content";

const cardImages = [
  "/assets/external/framerusercontent.com/images/iZWI4tJ1383PMTAhanmi0uk1Lo.png",
  "/assets/external/framerusercontent.com/images/Tf5Xd59nyPR3dSQxgr1Zls7G8Qo.png",
  "/assets/external/framerusercontent.com/images/vRbZ9MrlZ5AhbfdFOvSi5rJUwfQ.jpg",
  "/assets/external/framerusercontent.com/images/Bj5HIx9hPMuBG5Tm5yF4Md6eKkA.jpg",
];

export function GameCarousel() {
  const slides = gameCategories.map((game, index) => (
    <div
      key={game.title}
      className="relative h-full overflow-hidden rounded-3xl border border-gold-400/20 bg-black/70"
    >
      <img
        src={cardImages[index % cardImages.length]}
        alt={game.title}
        className="h-64 w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <p className="text-xs uppercase tracking-[0.4em] text-gold-200/70">
          {game.subtitle}
        </p>
        <h3 className="mt-2 font-display text-2xl text-gold-200">
          {game.title}
        </h3>
      </div>
    </div>
  ));

  return <EmblaCarousel slides={slides} />;
}
