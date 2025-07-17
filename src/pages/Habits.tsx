import { useState, useEffect } from "react";
import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../context/AuthContext";
import Habit from "../components/Habit";

export default function Habits() {
  const { user } = useAuth();
  const [habitName, setHabitName] = useState("");
  const [habits, setHabits] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, "habits"), where("userId", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setHabits(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, [user]);

  const addHabit = async () => {
    if (!habitName.trim() || !user) return;
    await addDoc(collection(db, "habits"), {
      userId: user.uid,
      habitName,
      streak: 0,
      lastCompleted: null,
      createdAt: new Date(),
    });
    setHabitName("");
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-background text-text px-4 pt-8 pb-28">
      <h1 className="text-3xl font-serif mb-4 text-primary">Your Habits</h1>

      <div className="w-full max-w-md flex mb-6">
        <input
          type="text"
          placeholder="New Habit"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          className="flex-1 border p-2 rounded-l-2xl"
        />
        <button onClick={addHabit} className="bg-primary text-white px-4 py-2 rounded-r-2xl">
          Add
        </button>
      </div>

      {habits.length === 0 && <p className="text-muted mt-12">No habits yet — add one to get started.</p>}

      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit} />
      ))}
    </div>
  );
}
