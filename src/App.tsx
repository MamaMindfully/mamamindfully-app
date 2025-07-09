import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Habits from './pages/Habits'
import BottomNav from './components/BottomNav'
import { auth, db } from './lib/firebase';
import Planner from "./pages/Planner";

console.log("Firebase initialized:", auth, db);

function App() {
  return (
    <div className="bg-rose-100 min-h-screen flex items-center justify-center">
      <div className="text-center p-8 rounded-lg shadow-lg bg-white">
        <h1 className="text-3xl font-serif text-rose-700">Mama Mindfully</h1>
        <p className="mt-4 text-gray-600">Welcome to your wellness journey.</p>
      </div>
    </div>
  );
}
