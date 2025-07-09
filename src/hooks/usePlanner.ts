import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { useAuth } from "../context/AuthContext";

type Entry = {
  id: string;
  text: string;
  createdAt: any;
};

export function usePlanner() {
  const [plannerEntries, setPlannerEntries] = useState<Entry[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, "planner", user.uid, "entries"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const entries = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Entry[];
      setPlannerEntries(entries);
    });

    return () => unsubscribe();
  }, [user]);

  const addEntry = async (text: string) => {
    if (!user) return;
    await addDoc(collection(db, "planner", user.uid, "entries"), {
      text,
      createdAt: new Date(),
    });
  };

  return { plannerEntries, addEntry };
}
