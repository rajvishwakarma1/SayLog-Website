import FeaturePage from "@/components/FeaturePage";

export const metadata = {
  title: "Personalized Insights - SayLog",
  description: "SayLog learns your eating patterns and gives you personalized nutritional insights, trends, and suggestions tailored to your goals.",
};

export default function InsightsPage() {
  return (
    <FeaturePage
      title="Insights that actually help you improve."
      subtitle="Personalized Insights"
      heroDescription="SayLog doesn't just log your food — it learns from your eating patterns and gives you actionable insights. It notices what you eat, when you eat, and how it aligns with your goals, then gives you specific suggestions you can actually follow."
      sections={[
        {
          title: "Pattern recognition",
          description: "After a week of logging, SayLog starts noticing things you might not. Maybe you consistently skip protein at breakfast. Maybe your weekend calorie intake is 40% higher than weekdays. Maybe you eat less on days you exercise. SayLog surfaces these patterns as simple, clear observations — not judgments — so you can decide what to do about them.",
          points: [
            "Identifies recurring patterns in your eating habits",
            "Spots nutritional gaps — protein, fiber, vitamins",
            "Tracks weekend vs weekday eating differences",
            "Notices correlations between activity and food intake",
          ],
        },
        {
          title: "Goal-aligned suggestions",
          description: "Tell SayLog your goal — lose weight, build muscle, maintain, or just eat healthier — and it tailors its suggestions accordingly. If you're trying to hit 120g protein daily and you're at 60g by dinner, SayLog might suggest high-protein Indian dinner options that fit your taste. It's not a generic meal plan — it's suggestions based on what you actually eat.",
          points: [
            "Suggestions based on your real eating patterns, not generic advice",
            "Recommends familiar Indian foods that fill nutritional gaps",
            "Adjusts recommendations as your patterns change",
            "Never prescriptive — suggestions, not commands",
          ],
        },
        {
          title: "Streak and consistency tracking",
          description: "Building a tracking habit is half the battle. SayLog tracks your logging streak and celebrates consistency. It knows that a 5-day streak matters more than one perfect day. You get gentle nudges if you haven't logged a meal, and recognition when you're being consistent — because consistency beats perfection in nutrition.",
          points: [
            "Daily logging streak counter",
            "Gentle reminders if you haven't logged a meal",
            "Weekly consistency score — percentage of meals tracked",
            "Milestone celebrations for sustained tracking habits",
          ],
        },
        {
          title: "Weekly summary reports",
          description: "Every week, SayLog generates a summary of your nutritional week. Average daily calories, macro split, most-eaten foods, biggest calorie sources, and how you compared to your goals. It's like having a nutritionist review your food diary, except it happens automatically and it's based on data you collected by just talking.",
          points: [
            "Automated weekly nutritional summary",
            "Average daily calories and macro breakdown",
            "Top foods and biggest calorie contributors identified",
            "Goal progress tracking with week-over-week comparison",
          ],
        },
      ]}
    />
  );
}
