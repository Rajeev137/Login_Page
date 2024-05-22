import React from "react";
import Input from "./Input";
import Pass from "./Pass";
import ForgotPass from "./ForgotPass";
import Checkbox from "./Checkbox";
import Submit from "./Submit";
import Services from "./Services";
import Bottom from "./Bottom";
import Heading from "./Heading";

const Login = () => {
  return (
    <div className="form-wrapper">
      <Heading/>
      <h2>Sign in</h2>
      <form>
        <Input />
        <Pass />
        <ForgotPass />
        <Checkbox />
        <Submit />
        <Services />
      </form>
      <Bottom />
    </div>
  );
};

export default Login;
