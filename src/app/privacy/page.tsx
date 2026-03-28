import Navbar from "@/components/Navbar";
import SayLogLogo from "@/components/SayLogLogo";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#19181a] text-cream">
      <Navbar />

      <section className="pt-24 pb-10 sm:pt-32 sm:pb-14 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 md:px-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent sm:text-sm">Legal</p>
          <h1 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted sm:text-base">Last updated: March 9, 2026</p>
        </div>
      </section>

      <section className="pb-16 sm:pb-20 md:pb-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 md:px-10">
          <PolicySection title="1. Introduction">
            <PolicyBody>
              RWE Labs ("we", "us", "our") operates SayLog. This Privacy Policy explains how we collect,
              use, and protect your personal data when you use the app. By using SayLog, you consent to the
              practices described here.
            </PolicyBody>
          </PolicySection>

          <PolicySection title="2. Data We Collect">
            <PolicyBody>We collect the following categories of data:</PolicyBody>
            <PolicySubheading>Account Information</PolicySubheading>
            <PolicyList
              items={[
                "Name and email address",
                "Date of birth, gender, height, and weight",
                "Dietary preferences, body goals, and activity level",
              ]}
            />

            <PolicySubheading>Food and Nutrition Logs</PolicySubheading>
            <PolicyList
              items={[
                "Meal names, quantities, and timestamps",
                "Calorie and macronutrient estimates for logged meals",
                "Voice transcripts used to identify food items (not stored after processing)",
              ]}
            />

            <PolicySubheading>Usage Data</PolicySubheading>
            <PolicyList
              items={[
                "Anonymized feature usage, screen views, and interaction events via PostHog",
                "Device type, OS version, and app version for debugging",
              ]}
            />
          </PolicySection>

          <PolicySection title="3. How We Use Your Data">
            <PolicyBody>We use your data to:</PolicyBody>
            <PolicyList
              items={[
                "Provide, maintain, and personalize the app experience",
                "Calculate calorie goals and macronutrient targets based on your profile",
                "Display your food logs, streaks, and progress",
                "Improve the app through aggregated, anonymized analytics",
                "Send transactional emails (account-related notifications only)",
                "Respond to your support requests",
              ]}
            />
          </PolicySection>

          <PolicySection title="4. Third-Party Services and Data Sharing">
            <PolicyBody>
              We do not sell your personal data. We share data only with the following service providers,
              solely to operate the app:
            </PolicyBody>

            <PolicySubheading>Sarvam AI - Speech-to-Text</PolicySubheading>
            <PolicyBody>
              When you use voice input, your audio recording is transmitted to Sarvam AI&apos;s servers for
              transcription. Sarvam AI specializes in Indian language speech recognition. Audio is processed
              in real time and is not retained by SayLog. Please review Sarvam AI&apos;s privacy policy for
              details on their data handling.
            </PolicyBody>

            <PolicySubheading>Google Gemini - Nutrition Estimation</PolicySubheading>
            <PolicyBody>
              The text transcription of your voice input (for example, "I had 2 rotis and dal") is sent to
              Google Gemini to estimate nutritional content. No personally identifiable information beyond the
              food description is included in these requests. Data is processed under Google&apos;s API usage
              policies.
            </PolicyBody>

            <PolicySubheading>PostHog - Analytics</PolicySubheading>
            <PolicyBody>
              We use PostHog to understand how users interact with the app so we can improve it. PostHog
              collects anonymized event data such as screen views and feature usage. We configure PostHog to
              avoid capturing personally identifiable information. You can opt out of analytics in app
              settings.
            </PolicyBody>

            <PolicySubheading>Supabase - Backend and Storage</PolicySubheading>
            <PolicyBody>
              Your account data, food logs, and profile are stored on Supabase&apos;s infrastructure. All data is
              encrypted at rest and in transit. Supabase is compliant with SOC 2 Type II. Row-level security
              ensures only you can access your own data.
            </PolicyBody>

            <PolicySubheading>Resend - Transactional Email</PolicySubheading>
            <PolicyBody>
              We use Resend to send account-related emails such as password resets. Only your email address is
              shared with Resend for this purpose.
            </PolicyBody>
          </PolicySection>

          <PolicySection title="5. Data Retention">
            <PolicyBody>
              We retain your personal data for as long as your account is active. When you delete your
              account:
            </PolicyBody>
            <PolicyList
              items={[
                "Your food logs are permanently deleted immediately",
                "Your profile data is removed from our active database",
                "Anonymized analytics data may be retained in aggregated form",
              ]}
            />
            <PolicyBody>
              Voice audio is never stored. It is processed in real time and discarded after transcription.
            </PolicyBody>
          </PolicySection>

          <PolicySection title="6. Your Rights">
            <PolicyBody>You have the right to:</PolicyBody>
            <PolicyList
              items={[
                "Access the personal data we hold about you",
                "Correct inaccurate data via your profile settings",
                "Delete your account and all associated data at any time from Settings to Delete Account",
                "Withdraw consent for analytics by contacting us",
              ]}
            />
            <PolicyBody>To exercise any of these rights, contact us at the address below.</PolicyBody>
          </PolicySection>

          <PolicySection title="7. Data Security">
            <PolicyBody>
              We take data security seriously. All data is encrypted in transit using TLS and at rest using
              industry-standard encryption. Access to production data is restricted to authorized personnel
              only. However, no method of transmission over the internet is 100 percent secure, and we cannot
              guarantee absolute security.
            </PolicyBody>
          </PolicySection>

          <PolicySection title="8. Children&apos;s Privacy">
            <PolicyBody>
              SayLog is not intended for children under the age of 13. We do not knowingly collect personal
              data from children. If you believe we have inadvertently collected such data, please contact us
              immediately and we will delete it.
            </PolicyBody>
          </PolicySection>

          <PolicySection title="9. Changes to This Policy">
            <PolicyBody>
              We may update this Privacy Policy from time to time. We will notify you of material changes
              through the app or by email. The "Last updated" date at the top of this page reflects the most
              recent revision. Continued use of the app after changes constitutes acceptance of the updated
              policy.
            </PolicyBody>
          </PolicySection>

          <PolicySection title="10. Contact Us">
            <PolicyBody>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out
              to us:
            </PolicyBody>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              RWE Labs<br />
              Email: <a href="mailto:rwelabs@gmail.com" className="text-accent underline/30 hover:underline">rwelabs@gmail.com</a>
            </p>
          </PolicySection>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-cream/10 py-8 sm:py-10 md:py-12">
      <h2 className="text-xl font-semibold tracking-[-0.02em] text-cream sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function PolicyBody({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-relaxed text-muted sm:text-base">{children}</p>;
}

function PolicySubheading({ children }: { children: React.ReactNode }) {
  return <h3 className="pt-1 text-sm font-semibold text-cream sm:text-base">{children}</h3>;
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm text-muted sm:text-base">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
