import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useEmailPass from "../../hooks/useEmailPass";

const Signup = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const { handelEmail, handelPassword, handelConfirmPassword, onCreateData } =
    useEmailPass();
  const handelGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" py-5 w-5/12 mx-auto border-2 flex flex-col  justify-center items-center my-40 rounded-md">
      <h1 className="text-2xl uppercase">Sign Up</h1>
      <form className="text-left" onSubmit={onCreateData}>
        <div className="form-group">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            onChange={handelEmail}
            type="email"
            name="email"
            id="email"
            className="outline-1 outline rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            onChange={handelPassword}
            type="password"
            name="password"
            id="password"
            className="outline-1 outline rounded-md"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password" className="block">
            Confirm Password
          </label>
          <input
            onChange={handelConfirmPassword}
            type="password"
            name="confirm-password"
            id="confirm-password"
            className="outline-1 outline rounded-md"
          />
        </div>
        <div>
          <button
            className="bg-slate-400 text-slate-900 w-full rounded-md py-1"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <p className="text-center mt-5">
        All ready have An Account?{" "}
        <Link className="text-slate-700 -m-3  hover:underline" to="/login">
          Login
        </Link>
      </p>
      <div>
        <button
          onClick={handelGoogleSignIn}
          className="bg-slate-400 my-6 px-5 py-1 rounded-lg"
        >
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
