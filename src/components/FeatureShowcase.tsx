export default function FeatureShowcase() {
  return (
    <section id="features" className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-3xl space-y-24 md:space-y-36">
        {FEATURES.map((f) => (
          <div key={f.heading}>
            <h2 className="mb-5 text-3xl font-semibold tracking-[-0.01em] leading-tight sm:text-4xl md:text-5xl">
              {f.heading}
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const FEATURES = [
  {
    heading: "Speak what you ate",
    description:
      "SayLog understands how you naturally describe food \u2014 in Hindi, Tamil, Bengali, Telugu and 7 more Indian languages. Just tap, speak, and your meal is logged in under 5 seconds.",
  },
  {
    heading: "Never search a database",
    description:
      "SayLog instantly breaks down every meal into calories, protein, carbs, and fat. No barcodes, no manual entry \u2014 it just works, even for dal chawal, pani puri, and mixed thalis.",
  },
  {
    heading: "Make it work your way",
    description:
      "Tell SayLog about your diet goals and it adapts. It learns your eating patterns, remembers your preferences, and gets more accurate with every meal you log.",
  },
];
