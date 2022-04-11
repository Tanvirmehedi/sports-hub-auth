import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useEmailPass = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  const handelConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onCreateData = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.log(error);
    } else {
      createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const onLoginData = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    email,
    password,
    confirmPassword,
    handelEmail,
    handelPassword,
    handelConfirmPassword,
    onCreateData,
    onLoginData,
  };
};

export default useEmailPass;
