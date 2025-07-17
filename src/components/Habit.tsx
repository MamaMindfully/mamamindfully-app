import { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

type HabitProps = {
  habit: any;
};

export default function Habit({ habit }: HabitProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    setIsCompleted(habit.lastCompleted === today);
  }, [habit.lastCompleted]);

  const toggleComplete = async () => {
    const today = new Date().toISOString().slice(0, 10);
    const habitRef = doc(db, "habits", habit.id);
    const newStreak = habit.lastCompleted === today ? habit.streak : habit.streak + 1;

    await updateDoc(habitRef, {
      lastCompleted: today,
      streak: newStreak,
    });

    setIsCompleted(true);
  };

  return (
    <div className="flex items-center justify-between w-full max-w-md bg-white rounded-4xl shadow-soft p-4 mb-3">
      <span>{habit.habitName}</span>
      <button
        onClick={toggleComplete}
        disabled={isCompleted}
        className={`px-4 py-2 rounded-4xl text-white transition ${
          isCompleted ? "bg-muted cursor-not-allowed" : "bg-secondary hover:bg-primary"
        }`}
      >
        {isCompleted ? "Completed" : "Complete"}
      </button>
    </div>
  );
}
