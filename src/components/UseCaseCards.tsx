export default function UseCaseCards() {
  const cases = [
    {
      title: "SayLog for Fitness Enthusiasts",
      description:
        "Track every macro without interrupting your routine. Speak your meals between sets, after runs, or during meal prep — SayLog handles the numbers so you can focus on gains.",
      icon: "💪",
    },
    {
      title: "SayLog for Busy Professionals",
      description:
        "No time to search databases or scan barcodes during your lunch break. Just tell SayLog what you ordered — it takes 5 seconds and keeps your nutrition on track all week.",
      icon: "💼",
    },
    {
      title: "SayLog for Indian Home Cooking",
      description:
        "Mixed thalis, regional recipes, mom's dal — SayLog is trained on Indian food and understands dishes that no Western tracker knows exist. Finally, accurate tracking for how India eats.",
      icon: "🍛",
    },
    {
      title: "SayLog for Diet Plans",
      description:
        "Whether you're on keto, intermittent fasting, or a dietician's custom plan — see exactly where your macros stand with zero effort. Speak, track, and stay consistent.",
      icon: "📋",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Built for the way you eat
          </h2>
          <p className="mt-3 text-stone-text-secondary">
            Whether you&apos;re counting macros or just curious — SayLog adapts to your lifestyle.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, i) => (
            <div
              key={i}
              className={`usecase-card p-6 sm:p-8 flex flex-col ${
                i === cases.length - 1 && cases.length % 3 !== 0
                  ? "sm:col-span-1"
                  : ""
              }`}
            >
              <span className="text-2xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-stone-text mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-stone-text-secondary leading-relaxed flex-1">
                {item.description}
              </p>
              <a
                href="#waitlist"
                className="mt-6 text-sm font-medium text-accent hover:text-accent-dark transition-colors inline-flex items-center gap-1"
              >
                Join waitlist
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
