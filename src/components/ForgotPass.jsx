import React from "react";

const ForgotPass = () => {
  function handleClick() {
    alert("Forgot Password is clicked");
  }
  return (
    <div>
      <div className="forgot-pass">
        <a onClick={handleClick}>Forgot Password?</a>
      </div>
    </div>
  );
};

export default ForgotPass;
