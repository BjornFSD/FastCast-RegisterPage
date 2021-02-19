import React from "react";

function InfoBox() {
  return (
    <div className="infoBox">
      <div className="infoBox_title">
        <h3>
          <b>Free shoutcast</b> server
        </h3>
      </div>
      <div className="infoBox_price">FREE</div>
      <div className="infoBox_features">
        <ul>
          <li>Online Radio Control Panel</li>
          <li>Stream Live</li>
          <li>AutoDJ Mode</li>
          <li>Radio Player &amp; Page</li>
          <li>LiveChat Support</li>
          <li>
            <p
              data-scrollto="#content"
              data-offset="100"
              onClick={() => {
                window.scrollTo({
                  top: document.querySelector(".section").offsetTop - 30,
                  behavior: "smooth",
                });
              }}
            >
              and more...
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InfoBox;
