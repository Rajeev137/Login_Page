import React, { useState } from "react";

function Pass() {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [imgSrc, setImgSrc] = useState("./src/assets/on.png");

  const handleChange = (event) => {
    setPassword(event.target.value);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    if (showPassword) {
      setImgSrc("./src/assets/on.png");
    } else {
      setImgSrc("./src/assets/off.png");
    }
  };

  const validatePassword = () => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isValidPass = regex.test(password);
    setIsValid(isValidPass);
    console.log(isValid)
    if (!isValid) {
      alert(
        "Password must contain at least 8 characters including one letter and one number"
      );
    }
  };

  return (
    <div>
      <div className="labels-input">Password</div>
      <div className="form-control">
        <input
          type={showPassword?"text":"password"}
          id="password"
          value={password}
          onChange={handleChange}
          onBlur={validatePassword}
          required
        />
        <img
          src={imgSrc}
          alt="icon"
          onClick={toggleShowPassword}
          style={{
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            width: "20px",
            cursor: "pointer",
          }}
        />
        <label>Enter your password </label>
      </div>
    </div>
  );
}
export default Pass;
