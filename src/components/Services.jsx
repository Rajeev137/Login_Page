import React from "react";

const Services = () => {
  return (
    <div>
      <div className="tos">
        <a href="/">
          Read our terms of service
          <img
            src="./src/assets/link.png"
            alt="icon"
            style={{
              position: "relative",
              top: "25%",
              left: "5px",
              transform: "translateY(-50%)",
              width: "15px",
              cursor: "pointer",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Services;
