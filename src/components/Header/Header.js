import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <header className="bg-slate-700 text-slate-100 py-3">
      <nav className="flex justify-between container mx-auto ">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/allsports">All Sports </Link>
          <Link to="/about">About</Link>
          {user ? (
            <>
              <span className="text-slate-500 uppercase">{user?.email}</span>
              <Link to="/login" onClick={logout}>
                Logout
              </Link>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
