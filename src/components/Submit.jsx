import React from "react";

const Submit = () => {
  function handleSubmit() {
    alert(" You are Logged in Succesfully");
  }
  return (
    <div>
      <button type="submit" onClick={handleSubmit}>
        SIGN IN
      </button>
    </div>
  );
};

export default Submit;
