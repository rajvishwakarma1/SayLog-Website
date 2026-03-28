import FeaturePage from "@/components/FeaturePage";

export const metadata = {
  title: "SayLog for Fitness Enthusiasts",
  description: "Track macros effortlessly while you focus on training. SayLog gives fitness enthusiasts precise protein, carb, and fat tracking through voice — no typing mid-workout.",
};

export default function FitnessPage() {
  return (
    <FeaturePage
      title="Track macros without breaking your flow."
      subtitle="For Fitness Enthusiasts"
      heroDescription="You already track your sets, reps, and rest times. Tracking food shouldn't be the hard part. SayLog lets you log meals by voice so you can hit your protein targets without spending 10 minutes typing into a calorie app after every meal."
      sections={[
        {
          title: "Protein tracking made effortless",
          description: "When you're trying to hit 150g protein daily, every meal matters. SayLog shows you your running protein total the moment you log a meal. Say \"4 eggs and 2 toast with peanut butter\" after your morning workout, and instantly see where you stand. No more guessing if you need an extra shake at night.",
          points: [
            "Running daily protein counter updates with every logged meal",
            "Per-meal protein breakdown so you can plan your remaining intake",
            "Knows protein content of Indian staples — paneer, dal, chicken, eggs, curd",
            "Alerts when you're falling behind your daily protein target",
          ],
        },
        {
          title: "Pre and post workout nutrition",
          description: "Timing matters for performance. SayLog makes it easy to log your pre-workout meal and post-workout recovery food without pulling out your phone to type. Voice log while you're stretching, walking to the gym, or cooling down. It tags meals by time so you can see your pre/post workout nutrition patterns.",
          points: [
            "Quick voice logging between sets or during rest",
            "Time-stamped meals to track nutrition timing",
            "Easy to log shakes, supplements, and quick snacks",
            "See patterns in how your nutrition aligns with training",
          ],
        },
        {
          title: "Bulk, cut, or maintain — SayLog adapts",
          description: "Set your goal in SayLog and it adjusts everything accordingly. Bulking? It tracks surplus and highlights high-calorie Indian meals. Cutting? It watches your deficit and flags when you're overeating. Maintaining? It keeps your intake steady. Your macro targets update automatically, and insights are tailored to your current phase.",
          points: [
            "Configurable calorie and macro targets for any goal",
            "Surplus/deficit tracking relative to your daily target",
            "Phase-aware insights — different advice for bulk vs cut",
            "Weekly progress trends to see if your plan is working",
          ],
        },
        {
          title: "Works with Indian fitness diets",
          description: "Indian fitness diets are unique — egg bhurji for protein, sattu drinks for pre-workout, paneer tikka for post-workout, sprouts for snacks. Generic trackers don't know these foods. SayLog does. It understands that your \"chicken breast\" might be tandoori-style with marinade, not plain boiled, and adjusts calories accordingly.",
          points: [
            "Indian protein sources — paneer, soya chunks, sprouts, dal, eggs — all tracked accurately",
            "Understands desi gym food — boiled eggs with chaat masala, protein rotis, oats chilla",
            "Differentiates cooking methods — grilled vs fried vs tandoori",
            "Tracks supplements and protein shakes alongside whole foods",
          ],
        },
      ]}
    />
  );
}
