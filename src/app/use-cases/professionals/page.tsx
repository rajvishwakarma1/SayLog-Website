import FeaturePage from "@/components/FeaturePage";

export const metadata = {
  title: "Easiest Calorie Tracker for Busy Professionals",
  description:
    "Log meals in under 5 seconds by voice. SayLog is the easiest calorie tracker for busy professionals — works with office canteen food, restaurant meals, and home-packed lunch.",
  alternates: {
    canonical: "/use-cases/professionals",
  },
  openGraph: {
    title: "Easiest Calorie Tracker for Busy Professionals | SayLog",
    description:
      "Log meals in under 5 seconds by voice. The easiest calorie tracker for your workday.",
    url: "/use-cases/professionals",
    images: [{ url: "/og-image.png" }],
  },
};

export default function ProfessionalsPage() {
  return (
    <FeaturePage
      title="Stay healthy without slowing down."
      subtitle="For Busy Professionals"
      heroDescription="Between meetings, deadlines, and commutes, you don't have time to weigh food or scroll through databases. SayLog fits into the 30 seconds you have between a meeting and your lunch. Voice in, macros out, done."
      sections={[
        {
          title: "Log meals in the time between meetings",
          description: "You just finished a meeting and grabbed lunch from the office cafeteria — rajma chawal, a roti, and some salad. Before your next meeting starts, just tell SayLog what you ate. Five seconds, done. No opening an app, searching \"rajma,\" selecting portion size, then searching \"rice,\" selecting portion size. Just speak once and move on.",
          points: [
            "Under 5 seconds to log a complete meal",
            "No multi-step forms or database searches",
            "Works while walking, driving, or between meetings",
            "Log via voice message — no need to even open the app fully",
          ],
        },
        {
          title: "Office and canteen food, handled",
          description: "Office canteens, working lunches, client dinners, airport food — your eating is unpredictable. SayLog handles all of it. Describe what's on your plate in plain language and it figures out the rest. Had a sandwich from the office cafeteria? A dosa from the canteen? Ordered biryani on Swiggy? Just say it.",
          points: [
            "Works with canteen and cafeteria meals without brand data",
            "Handles restaurant meals and food delivery orders",
            "Estimates nutrition for buffet-style and catered meals",
            "Tracks coffee, chai, and snacking throughout the workday",
          ],
        },
        {
          title: "Build consistency without effort",
          description: "The reason most professionals stop tracking calories isn't lack of motivation — it's friction. Opening an app, searching, selecting, confirming — it adds up to 5-10 minutes a day. SayLog cuts that to under a minute total. That's the difference between tracking for a week and tracking for a year. Low friction means sustainable habits.",
          points: [
            "Total daily logging time: under 60 seconds across all meals",
            "Gentle reminders that don't interrupt your workflow",
            "Streak tracking that motivates consistency, not perfection",
            "Weekly summary delivered automatically — no effort to review",
          ],
        },
        {
          title: "Travel and irregular schedules",
          description: "Business trips, late-night dinners, skipped lunches, airport terminals — your schedule isn't 9-to-5 and your eating isn't either. SayLog doesn't care when you eat. Log at midnight, log at 6am, log three meals at once at the end of the day. It adapts to your rhythm, not the other way around.",
          points: [
            "No rigid meal-time structure — log whenever works for you",
            "Batch log multiple meals in one conversation",
            "Works across time zones for frequent travelers",
            "Offline logging for flights and low-connectivity travel",
          ],
        },
      ]}
    />
  );
}
