import React from "react";
import "../style/Login.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function LoginPage() {
  return (
    <div className="container">
      <div className="header">
        <h1>Login</h1>
      </div>

      <div className="login">
        <SignIn />
      </div>
    </div>
  );
}