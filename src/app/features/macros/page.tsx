import FeaturePage from "@/components/FeaturePage";

export const metadata = {
  title: "Instant Macro Breakdown - SayLog",
  description: "Get calories, protein, carbs, and fat instantly after logging a meal by voice. SayLog breaks down every Indian dish into detailed macronutrients.",
};

export default function MacrosPage() {
  return (
    <FeaturePage
      title="Every macro, instantly calculated."
      subtitle="Instant Macro Breakdown"
      heroDescription="The moment you finish speaking, SayLog shows you a complete nutritional breakdown — calories, protein, carbohydrates, fat, and fiber. No waiting, no manual lookup. It works for home-cooked Indian meals that no other tracker can handle."
      sections={[
        {
          title: "Real-time nutritional analysis",
          description: "As soon as you describe your meal, SayLog processes your voice and returns a detailed macro breakdown within seconds. You see calories, protein, carbs, fat, and fiber for each individual item and the meal total. It's fast enough that you can check your macros while you're still at the dinner table.",
          points: [
            "Complete breakdown: calories, protein, carbs, fat, fiber",
            "Per-item and total-meal nutritional summary",
            "Results appear in under 5 seconds after speaking",
            "Visual breakdown with easy-to-read macro percentages",
          ],
        },
        {
          title: "Indian food, accurately tracked",
          description: "Tracking \"grilled chicken breast\" is easy — every app does it. But what about rajma chawal made with ghee, or aloo paratha with homemade butter, or a Hyderabadi biryani? Indian food is complex — dishes have multiple ingredients, cooking methods vary by household, and portion sizes aren't standardized. SayLog's database is built specifically for this complexity.",
          points: [
            "Accounts for cooking oil, ghee, and tempering in calorie calculations",
            "Understands that \"homestyle\" and \"restaurant-style\" have different macros",
            "Knows typical portion sizes for Indian meals — bowls, plates, rotis",
            "Handles composite dishes like thali, biryani, and curries with rice",
          ],
        },
        {
          title: "Portion intelligence",
          description: "When you say \"ek bowl dal,\" SayLog knows that a typical bowl of dal is around 200ml. When you say \"2 roti,\" it uses standard Indian roti size. But it also learns your patterns. If your rotis are bigger or your bowls are smaller, SayLog adjusts over time. You can also specify — \"chhoti katori\" vs \"badi katori\" — and it understands.",
          points: [
            "Standard Indian portion sizes built in (katori, plate, glass, piece)",
            "Understands size modifiers — \"chhoti\", \"badi\", \"half\", \"thoda\"",
            "Learns your personal portion patterns over time",
            "Handles restaurant portions vs home-cooked portions differently",
          ],
        },
        {
          title: "Daily and weekly macro tracking",
          description: "Individual meal breakdowns roll up into your daily dashboard. See your running calorie total, how your macro split is trending, and whether you're hitting your protein target. Weekly views show patterns — maybe you consistently under-eat protein on weekdays or overeat on weekends. SayLog surfaces these insights so you can adjust.",
          points: [
            "Running daily total updates with every logged meal",
            "Macro split visualization — protein, carbs, fat at a glance",
            "Weekly trends show eating patterns across the week",
            "Progress toward daily targets with clear visual indicators",
          ],
        },
      ]}
    />
  );
}
