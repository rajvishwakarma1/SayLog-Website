import FeaturePage from "@/components/FeaturePage";

export const metadata = {
  title: "Indian Language Support - SayLog",
  description: "SayLog understands 11 Indian languages including Hindi, Tamil, Telugu, Bengali, Marathi, Kannada, and more. Log meals the way you naturally speak.",
};

export default function LanguagesPage() {
  return (
    <FeaturePage
      title="Speak in your language. We understand."
      subtitle="Indian Language Support"
      heroDescription="India has 22 official languages and hundreds of dialects. Most people think about food in their mother tongue. SayLog supports 11 Indian languages so you can log meals exactly the way you talk about them at home."
      sections={[
        {
          title: "11 languages, one experience",
          description: "SayLog currently supports Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi, Odia, and English. Each language model is trained specifically on food vocabulary, regional dish names, and local cooking terminology. Whether you say \"sambhar sadam\" in Tamil or \"dal chawal\" in Hindi, SayLog recognizes the dish and knows its nutritional profile.",
          points: [
            "Hindi, Tamil, Telugu, Kannada, Malayalam — all major South and North Indian languages",
            "Bengali, Marathi, Gujarati, Punjabi, Odia — comprehensive coverage across India",
            "English support with Indian food vocabulary built in",
            "Each language model trained on region-specific food terminology",
          ],
        },
        {
          title: "Code-switching is natural, we handle it",
          description: "Most Indians don't speak in a single language — they mix. \"Maine aaj lunch mein butter chicken khaya with naan\" is a perfectly normal sentence. SayLog handles code-switching between any of its supported languages and English seamlessly. You don't need to set a language or switch modes. Just speak however you naturally would.",
          points: [
            "Automatic language detection — no manual switching needed",
            "Handles mid-sentence language changes naturally",
            "Works with Hinglish, Tanglish, Kanglish, and all common mixes",
            "No accuracy loss when mixing languages in a single sentence",
          ],
        },
        {
          title: "Regional food knowledge built in",
          description: "A generic calorie tracker might know \"chicken curry\" but not \"kosha mangsho\" or \"chettinad chicken.\" SayLog's food database is built around Indian cuisine from the ground up. It knows that \"poha\" in Maharashtra is different from \"aval\" in Tamil Nadu (same dish, different name). It understands regional breakfast items, festival foods, street food, and home-cooked staples across all supported languages.",
          points: [
            "500+ region-specific Indian dishes with accurate nutritional data",
            "Understands multiple names for the same dish across regions",
            "Knows regional cooking methods and their impact on nutrition",
            "Festival and seasonal food recognition — from Onam sadhya to Diwali sweets",
          ],
        },
        {
          title: "Accuracy that improves over time",
          description: "SayLog's language models are continuously trained on real Indian speech patterns. As more people use SayLog in their language, the recognition gets sharper, the food database grows, and the nutritional accuracy improves. Early users directly shape how well SayLog understands their language and regional cuisine.",
          points: [
            "Models improve with usage across all supported languages",
            "Regional food database expands based on user inputs",
            "Pronunciation variations and dialects handled progressively better",
            "Your feedback directly trains the model for your language",
          ],
        },
      ]}
    />
  );
}
