import FeaturePage from "@/components/FeaturePage";

export const metadata = {
  title: "Voice Meal Logging - SayLog",
  description: "Log your meals by simply speaking. SayLog understands natural speech in 11 Indian languages and instantly converts it into accurate nutritional data.",
};

export default function VoiceLoggingPage() {
  return (
    <FeaturePage
      title="Log meals by just speaking."
      subtitle="Voice Meal Logging"
      heroDescription="No typing. No searching databases. No scanning barcodes. Just say what you ate in your own words, in your own language, and SayLog handles the rest. It's the fastest way to track your nutrition."
      sections={[
        {
          title: "Natural speech, not commands",
          description: "SayLog doesn't need you to speak in a specific format. Say \"maine subah 2 paratha aur chai pi\" or \"I had rice, dal, and sabzi for lunch\" — it understands both. Mix Hindi and English, use casual phrasing, mention quantities however you like. SayLog's AI parses your natural speech and extracts every food item, portion size, and meal context automatically.",
          points: [
            "Understands mixed-language sentences (Hinglish, Tanglish, etc.)",
            "Parses casual quantities like \"thoda\", \"ek bowl\", \"half plate\"",
            "Recognizes meal context from time of day and conversation flow",
            "Handles corrections mid-sentence — \"actually, make that 3 rotis not 2\"",
          ],
        },
        {
          title: "Under 5 seconds to log a full meal",
          description: "Traditional calorie trackers make you search a database, pick portion sizes, add each item one by one. A typical Indian thali with 5-6 items could take 2-3 minutes. With SayLog, you describe your entire meal in one sentence and it's logged in under 5 seconds — including the nutritional breakdown.",
          points: [
            "Log a complete thali in a single voice message",
            "Instant macro breakdown appears as soon as you finish speaking",
            "No app navigation needed — the voice input is the entire interface",
            "Works even with complex, multi-item home-cooked meals",
          ],
        },
        {
          title: "Context-aware logging",
          description: "SayLog remembers your conversation. If you logged lunch and then say \"oh, I also had a glass of chaas,\" it knows to add it to your lunch. If you say \"same as yesterday's breakfast,\" it recalls what you had. This conversational memory means you spend less time explaining and more time living.",
          points: [
            "Add items to a previously logged meal without repeating context",
            "Reference past meals — \"same as yesterday\" or \"my usual breakfast\"",
            "Automatic meal categorization based on time and conversation",
            "Edit and adjust previous entries through natural conversation",
          ],
        },
        {
          title: "Works offline, syncs when connected",
          description: "You don't always have internet when you're eating. SayLog records your voice locally and processes it as soon as you're back online. Your logging habit never has to break, whether you're in a metro station, at a wedding in a small town, or just in a building with bad signal.",
          points: [
            "Voice recordings saved locally when offline",
            "Automatic sync and processing when internet returns",
            "No data loss — every meal is captured regardless of connectivity",
            "Background sync means you never have to wait",
          ],
        },
      ]}
    />
  );
}
