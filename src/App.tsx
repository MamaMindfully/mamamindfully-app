import { useState } from "react";

// Move outside component so it's not redefined every render
const affirmations = [
  "You are calm, capable, and worthy of love 🌸",
  "Today brings new opportunities for growth and joy 🌱",
  "You have the strength to overcome any challenge 💪",
  "Your potential is limitless and beautiful ✨",
  "You deserve happiness, peace, and success 🌈",
  "You are exactly where you need to be right now 🌟",
  "Your kindness makes the world brighter 💛",
  "You are enough, just as you are 💝",
  "Trust yourself - you know what's best for you 🦋",
  "Every day you are becoming stronger and wiser 🌺",
  "You choose peace over perfection today 🕊️",
  "Your love creates ripples of positivity 💞",
  "You are a wonderful mother doing your best 👶",
  "Rest is productive and you deserve it 😌",
  "Your feelings are valid and important 🤗",
  "You are creating a beautiful life story 📖",
  "Small steps still move you forward 👣",
  "You are worthy of all good things 🌻",
  "Your intuition guides you perfectly 🧭",
  "You radiate love and light wherever you go ✨",
];

export default function App() {
  const [index, setIndex] = useState(0);

  function newAffirmation() {
    let next;
    do {
      next = Math.floor(Math.random() * affirmations.length);
    } while (next === index && affirmations.length > 1);
    setIndex(next);
  }

  return (
    <main className="min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center p-4">
      <section className="bg-white border-4 border-[#C86B4A] rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center">
        <div className="flex justify-center mb-4" aria-hidden="true">
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M50 10 C42 12, 35 22, 35 32 C35 42, 42 48, 50 48 C58 48, 65 42, 65 32 C65 22, 58 12, 50 10 Z"
              stroke="#C86B4A"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M72 25 C70 17, 60 15, 52 20 C44 25, 42 35, 47 43 C52 51, 62 53, 70 48 C78 43, 80 33, 72 25 Z"
              stroke="#C86B4A"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M72 75 C80 73, 82 63, 77 55 C72 47, 62 45, 54 50 C46 55, 44 65, 49 73 C54 81, 64 83, 72 75 Z"
              stroke="#C86B4A"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M50 90 C58 88, 65 78, 65 68 C65 58, 58 52, 50 52 C42 52, 35 58, 35 68 C35 78, 42 88, 50 90 Z"
              stroke="#C86B4A"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M28 75 C20 73, 18 63, 23 55 C28 47, 38 45, 46 50 C54 55, 56 65, 51 73 C46 81, 36 83, 28 75 Z"
              stroke="#C86B4A"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M28 25 C30 17, 40 15, 48 20 C56 25, 58 35, 53 43 C48 51, 38 53, 30 48 C22 43, 20 33, 28 25 Z"
              stroke="#C86B4A"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Combined heading for accessibility */}
        <h1 className="text-3xl font-bold tracking-wide text-[#C86B4A] font-serif mb-4">
          MAMA MINDFULLY
        </h1>

        <div
          className="affirmation text-xl md:text-2xl text-[#C86B4A] font-semibold my-6 p-4 min-h-[80px] bg-[#FDF9F5] rounded-xl border-2 border-[#E8D5CC] flex items-center justify-center transition-colors duration-300"
          role="status"
          aria-live="polite"
        >
          {affirmations[index]}
        </div>

        <button
          onClick={newAffirmation}
          className="button bg-[#C86B4A] text-white py-3 px-8 rounded-xl text-lg font-bold shadow-lg hover:bg-[#b85a3e] focus:ring-2 focus:ring-[#C86B4A] focus:outline-none transition"
          aria-label="Generate new affirmation"
        >
          New Affirmation
        </button>
      </section>
    </main>
  );
}
