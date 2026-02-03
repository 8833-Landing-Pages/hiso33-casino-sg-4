const highlightItems = [
  {
    title: "Live Agents",
    description: "Dedicated hosts ready for VIP bookings and premium service.",
  },
  {
    title: "Instant Payouts",
    description: "Fast withdrawals with prioritized processing and compliance.",
  },
  {
    title: "Premium Odds",
    description: "Exclusive odds for elite bettors and private tournaments.",
  },
];

export function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-3">
        {highlightItems.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-gold-400/20 bg-gradient-to-b from-black/80 to-wine-900/40 p-8"
          >
            <h3 className="font-display text-2xl text-gold-200">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-gold-100/70">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
