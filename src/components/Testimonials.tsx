export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      text: "I've tried MyFitnessPal, HealthifyMe, and a dozen others. Nothing stuck because logging was tedious. With SayLog, I just say what I ate in Hindi and it's done. This is the first tracker I've used for more than two weeks.",
      title: "Finally, a tracker that understands Indian food!",
      author: "Priya M.",
      source: "Beta Tester",
    },
    {
      stars: 5,
      text: "The voice input is incredibly accurate. I spoke in Tamil about my breakfast — idli, sambar, filter coffee — and it got everything right including the calorie estimates. No other app does this.",
      title: "Voice input in Tamil actually works",
      author: "Karthik R.",
      source: "Beta Tester",
    },
    {
      stars: 5,
      text: "As someone who eats home-cooked food that's never in any database, SayLog is a lifesaver. I just describe what I had and it figures out the macros. Saves me so much time every day.",
      title: "Perfect for home-cooked meals",
      author: "Ananya S.",
      source: "Beta Tester",
    },
    {
      stars: 5,
      text: "I'm a fitness coach and I recommend SayLog to all my Indian clients. The regional language support and Indian food knowledge makes it so much easier for them to stay consistent with their tracking.",
      title: "Game changer for my clients",
      author: "Rohit K.",
      source: "Beta Tester",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            What early testers are saying
          </h2>
          <p className="mt-3 text-stone-text-secondary">
            Real feedback from people who tried SayLog before launch.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, i) => (
            <div key={i} className="testimonial-card p-6 sm:p-8 flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <svg
                    key={j}
                    className="h-5 w-5 text-amber-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-stone-text-secondary text-sm sm:text-base leading-relaxed italic flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-stone-border/60">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-accent-light flex items-center justify-center">
                    <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 11.25a3 3 0 110-6 3 3 0 010 6zM5.96 18.067C6.865 16.486 9.296 15 12 15s5.135 1.486 6.04 3.067a8.212 8.212 0 01-12.08 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-text">{review.title}</p>
                    <p className="text-xs text-stone-text-tertiary">{review.author}, {review.source}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
