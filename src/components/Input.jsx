import React, { useState } from "react";

const Input = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = regex.test(email)
    setIsValid(isValidEmail);
    console.log(isValid)
    if (!isValid) {
      alert("Enter Valid Email");
    }
  };

  return (
    <div>
      <div className="labels-input">Email</div>
      <div className="form-control">
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
          onBlur={validateEmail}
          required
        />

        <label>Enter your email address</label>
      </div>
    </div>
  );
};

export default Input;
