import React from "react";
import "../style/Login.css";

import SignUp from "./SignUp";

export default function SignUpContainer() {
  return (
    <div className="container">
      <div className="header">
        <h1>Sign Up</h1>
      </div>

      <div className="login">
        <SignUp />
      </div>
    </div>
  );
}
