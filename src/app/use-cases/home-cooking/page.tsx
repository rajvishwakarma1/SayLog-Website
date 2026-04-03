import FeaturePage from "@/components/FeaturePage";

export const metadata = {
  title: "Calorie Tracker for Indian Home Cooking",
  description:
    "Finally, a calorie tracker that understands Indian home-cooked meals. Track dal, sabzi, roti, paratha, and family recipes by voice. No barcode scanning needed.",
  alternates: {
    canonical: "/use-cases/home-cooking",
  },
  openGraph: {
    title: "Calorie Tracker for Indian Home Cooking | SayLog",
    description:
      "A calorie tracker that understands Indian home-cooked meals — dal, sabzi, roti, and everything your kitchen makes.",
    url: "/use-cases/home-cooking",
    images: [{ url: "/og-image.png" }],
  },
};

export default function HomeCookingPage() {
  return (
    <FeaturePage
      title="Built for the meals your family makes."
      subtitle="For Indian Home Cooking"
      heroDescription="Every Indian household cooks differently. Your mom's dal isn't the same as a restaurant's dal. The amount of oil, the type of tempering, the size of rotis — it all varies. SayLog is the first tracker that actually understands this, because it was built for Indian kitchens from day one."
      sections={[
        {
          title: "No barcode? No problem.",
          description: "Home-cooked food doesn't come in packages. There's no barcode on your mom's rajma or your wife's sambar. Every other calorie tracker falls apart here — they need you to manually add ingredients, estimate quantities, and calculate from scratch. SayLog just needs you to say \"rajma chawal with salad\" and it handles the rest, using its Indian-food-first database.",
          points: [
            "Works with food that has no packaging, label, or barcode",
            "Recognizes home-cooked dishes by name, not by product code",
            "Estimates typical homestyle portions automatically",
            "No need to weigh ingredients or measure cooking oil",
          ],
        },
        {
          title: "Understands how Indian kitchens cook",
          description: "Indian cooking uses tempering (tadka), pressure cooking, slow simmering, and generous amounts of oil and ghee. These affect nutrition significantly. A dry sabzi has different calories than a gravy-based one. Paratha fried in ghee is different from dry-roasted roti. SayLog understands these cooking methods and factors them into its calculations.",
          points: [
            "Cooking method awareness — fried, dry-roasted, pressure-cooked, tempered",
            "Accounts for oil, ghee, butter, and coconut oil used in cooking",
            "Knows the difference between gravy-based and dry preparations",
            "Understands tadka, bhuna, dum, and other Indian cooking techniques",
          ],
        },
        {
          title: "Every regional cuisine, every daily staple",
          description: "Whether your household runs on roti-sabzi, rice-sambhar, dal-bhaat, or pav bhaji, SayLog knows your staples. It covers North Indian thalis, South Indian meals, Bengali fish-and-rice combos, Gujarati farsan, Maharashtrian pitla-bhakri, and everything in between. Your daily menu is in the database, not as an afterthought, but as the core.",
          points: [
            "North Indian: roti, paratha, paneer dishes, chole, rajma, dal makhani",
            "South Indian: idli, dosa, sambhar, rasam, avial, kootu, poriyal",
            "East Indian: machher jhol, shukto, luchi-alur dom, pitha",
            "West Indian: dhokla, thepla, pav bhaji, poha, misal, sabudana khichdi",
          ],
        },
        {
          title: "Family meals, individual tracking",
          description: "In most Indian households, everyone eats from the same pot but in different quantities. You might eat 3 rotis, your partner eats 2, your kid eats 1. SayLog lets each family member log their own portion of the same family meal. No need to enter the recipe — just say what you had from the table and how much.",
          points: [
            "Log your portion of a shared family meal",
            "No need to enter full recipes or ingredients",
            "\"I had 2 rotis, dal, and some sabzi\" is enough input",
            "Each family member tracks independently from the same meal",
          ],
        },
      ]}
    />
  );
}
