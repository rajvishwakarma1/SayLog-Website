import SayLogLogo from "./SayLogLogo";

export default function Footer() {
  return (
    <footer className="bg-[#ffeadf] text-[#19181a]">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-10 md:px-10 md:pt-20 md:pb-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-[1fr_auto_auto_auto_auto] lg:gap-x-14">
          {/* Logo - left */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div style={{ filter: "brightness(0)" }}>
                <SayLogLogo size={22} />
              </div>
              <span className="text-base font-semibold tracking-tight text-[#19181a]">SayLog</span>
            </div>
          </div>

          {/* 4 columns - right */}
          <FooterCol
            title="Features"
            links={[
              { label: "Voice Meal Logging", href: "/features/voice-logging" },
              { label: "Indian Language Support", href: "/features/languages" },
              { label: "Instant Macro Breakdown", href: "/features/macros" },
              { label: "Personalized Insights", href: "/features/insights" },
              { label: "Meal Recognition", href: "/features/meal-recognition" },
            ]}
          />
          <FooterCol
            title="Use Cases"
            links={[
              { label: "Fitness Enthusiasts", href: "/use-cases/fitness" },
              { label: "Busy Professionals", href: "/use-cases/professionals" },
              { label: "Indian Home Cooking", href: "/use-cases/home-cooking" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Release Notes", href: "/release-notes" },
            ]}
          />
          <FooterCol
            title="Socials"
            links={[
              { label: "Instagram", href: "https://www.instagram.com/rajvishwakarmafr/" },
              { label: "X", href: "https://x.com/303zion" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/rajvishwakarma1/" },
              { label: "Contact", href: "mailto:rwelabs@gmail.com" },
            ]}
          />
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#19181a]/10 pt-5 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <p className="text-xs text-[#19181a]/50">
            &copy; {new Date().getFullYear()} RWE Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#19181a]/60 sm:text-sm">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-[#19181a]/90 transition-colors hover:text-accent sm:text-base"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
