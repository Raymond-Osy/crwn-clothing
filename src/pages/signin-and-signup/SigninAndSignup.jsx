import React from "react";
import "./SigninAndSignup.scss";
import Signin from "../../components/sign-in/Signin";
import Signup from "../../components/sign-up/Signup"

const SigninAndSignup = () => (
    <div className="sign-in-and-sign-up">
        <Signin />
        <Signup />
    </div>
);

export default SigninAndSignup;