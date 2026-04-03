import FeaturePage from "@/components/FeaturePage";

export const metadata = {
  title: "500+ Indian Dishes — No Barcode Needed",
  description:
    "SayLog recognizes 500+ Indian dishes from names and ingredients. Track home-cooked dal, sabzi, roti, biryani, and street food without barcodes or manual entry.",
  alternates: {
    canonical: "/features/meal-recognition",
  },
  openGraph: {
    title: "500+ Indian Dishes — No Barcode Needed | SayLog",
    description:
      "SayLog recognizes 500+ Indian dishes from names and ingredients. No barcodes, no manual entry.",
    url: "/features/meal-recognition",
    images: [{ url: "/og-image.png" }],
  },
};

export default function MealRecognitionPage() {
  return (
    <FeaturePage
      title="It knows your food, even the homemade kind."
      subtitle="Meal Recognition"
      heroDescription="Most calorie trackers work with packaged food and barcodes. But in India, 80% of meals are home-cooked with no barcode in sight. SayLog recognizes Indian meals from descriptions, ingredient lists, and even vague references — because it was built for the way you actually eat."
      sections={[
        {
          title: "500+ Indian dishes in the database",
          description: "SayLog's food database isn't a generic USDA list with Indian food bolted on. It's built from scratch around Indian cuisine. From everyday staples like dal, roti, and rice to regional specialties like appam, puttu, litti chokha, and pav bhaji. Each dish has nutritional data calibrated for typical Indian preparation methods — with oil, ghee, spices, and all.",
          points: [
            "Covers North, South, East, and West Indian cuisines",
            "Street food — vada pav, pani puri, dosa, chaat varieties",
            "Home-cooked staples — sabzi variations, dal varieties, rice dishes",
            "Regional specialties — Hyderabadi biryani, Kashmiri wazwan, Bengali fish curry",
          ],
        },
        {
          title: "No barcode needed",
          description: "When your mom makes aloo gobi at home, there's no barcode to scan. When you eat at a local dhaba, there's no branded package. SayLog doesn't need any of that. Just describe what you ate — \"aloo gobi with 2 roti and a bit of pickle\" — and it identifies each component, estimates portions, and calculates nutrition. This is what makes SayLog fundamentally different from every other tracker.",
          points: [
            "Works with home-cooked meals that have no packaging or labels",
            "Handles dhaba and street food with no brand information",
            "Estimates nutrition from ingredient descriptions when exact data isn't available",
            "Learns your household's cooking style over time for better accuracy",
          ],
        },
        {
          title: "Understands ingredients, not just dish names",
          description: "If you say \"I made a sabzi with lauki, tomato, and a little oil,\" SayLog can calculate the nutrition even if the specific dish doesn't have a name. It breaks down ingredients individually, accounts for cooking method, and assembles a nutritional profile. This means even your improvised, unnamed home experiments get tracked accurately.",
          points: [
            "Ingredient-level nutritional calculation for unnamed dishes",
            "Cooking method awareness — fried vs boiled vs steamed",
            "Oil and ghee quantity estimation from natural descriptions",
            "Works even when you describe a dish by its ingredients instead of its name",
          ],
        },
        {
          title: "Learns what you eat regularly",
          description: "After a few weeks, SayLog knows your regular meals. It knows that your \"usual breakfast\" is poha with peanuts and chai. It knows your go-to lunch is dal rice with a side of salad. This means recognition gets faster and more accurate over time. You log less, SayLog understands more, and tracking becomes almost invisible in your daily routine.",
          points: [
            "Builds a personal food profile from your logging history",
            "\"Same as usual\" or \"my regular breakfast\" works as valid input",
            "Faster recognition for frequently eaten meals",
            "Adapts to seasonal changes in your diet automatically",
          ],
        },
      ]}
    />
  );
}
