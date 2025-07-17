import { useState } from 'react';

const affirmations = [
  "You are calm, capable, and worthy of love 🌸",
  "Today brings new opportunities for growth and joy 🌱",
  "You are doing your best, and that is enough 💛",
  "You deserve care and kindness—including your own 💐",
];

export default function Affirmation() {
  const [affirmation, setAffirmation] = useState(
    () => localStorage.getItem('lastAffirmation') || affirmations[0]
  );

  const newAffirmation = () => {
    let idx;
    do {
      idx = Math.floor(Math.random() * affirmations.length);
    } while (affirmations[idx] === affirmation && affirmations.length > 1);
    setAffirmation(affirmations[idx]);
    localStorage.setItem('lastAffirmation', affirmations[idx]);
  };

  return (
    <div className="rounded-2xl shadow-xl bg-white text-center p-8 w-full max-w-md">
      <div className="text-xl mb-6 italic">{affirmation}</div>
      <button
        className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-5 py-2 rounded-xl transition"
        onClick={newAffirmation}
      >
        New Affirmation
      </button>
    </div>
  );
}
