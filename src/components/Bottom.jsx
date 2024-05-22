import React from "react";

const Bottom = () => {
  return (
    <div>
      <div className="bottom-container">
        <div id="blank-box"></div>
        <div className="footer">
          <div className="other-ways">OTHER WAYS TO WATCH</div>
          <div className="logos">
          <a href="#">
              <img src="./src/assets/logo1.png" width="40px" />
            </a>
            <a href="#">
              <img src="./src/assets/logo2.png" width="35px" />
            </a>
            <a href="#">
              <img src="./src/assets/logo3.png" width="55px" />
            </a>
            <a href="#">
              <img src="./src/assets/logo4.png" width="65px" />
            </a>
          </div>
          <div className="search-apple-tv">
            Search for AppleTV+ FYC on your App Store
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
