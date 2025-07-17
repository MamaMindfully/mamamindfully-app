import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useAuth } from "../context/AuthContext";

export default function BottomNav() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-soft flex justify-around py-3 border-t border-gray-200 text-sm">
      <NavLink to="/" className="text-muted hover:text-primary">Home</NavLink>
      <NavLink to="/habits" className="text-muted hover:text-primary">Habits</NavLink>
      {user && (
        <button onClick={handleLogout} className="text-muted hover:text-red-500">
          Logout
        </button>
      )}
    </nav>
  );
}
