import React from "react";
import logo from "../images/logo.png";
import LoginDrawer from "../boxes/LoginDrawer";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={logo} alt="" />
      </div>
      <div className="header_providerToLoginDrawer">
        <LoginDrawer />
      </div>
    </div>
  );
}

export default Header;
