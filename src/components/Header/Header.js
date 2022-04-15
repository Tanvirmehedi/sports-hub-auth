import { MenuIcon, ShoppingCartIcon, XIcon } from "@heroicons/react/solid";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
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
        <div
          className={`transition-all flex flex-col md:flex-row justify-center items-center ${
            !open ? "hidden md:block" : ""
          }`}
        >
          <Link to="/cart">
            <ShoppingCartIcon
              className="inline-block"
              height={20}
            ></ShoppingCartIcon>
          </Link>
          {user ? (
            <>
              <span className="text-slate-500 uppercase">{user?.email}</span>
              <Link to="/login" onClick={logout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="md:hidden pr-4 mt-1 cursor-pointer"
        >
          {!open ? (
            <MenuIcon height={20}></MenuIcon>
          ) : (
            <XIcon height={20}></XIcon>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
