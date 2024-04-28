import React, { useState } from "react";
import { BiUser, BiBook, BiMessage } from "react-icons/bi";
import "../../Styles/SideBar/SideBar.css";
import CompanyProfile from "./companyProfile";

function SideBar({ onItemClick }) {
  const handleItemClick = (itemName) => {
    onItemClick(itemName);
  };

  return (
    <div className="menu">
      <div className="pharmacy-profile">
        <CompanyProfile />
      </div>

      <div className="menu--list">
        <a
          href="#"
          className="item"
          onClick={() => handleItemClick("Dashboard")}
        >
          <BiBook className="logo-icon" />
          Dashboard
        </a>
        <a
          href="#"
          className="item"
          onClick={() => handleItemClick("Request Approval")}
        >
          <BiMessage className="logo-icon" />
          Request Approval
        </a>
        <a href="#" className="item" onClick={() => handleItemClick("Profile")}>
          <BiUser className="logo-icon" />
          Profile
        </a>
      </div>
    </div>
  );
}

export default SideBar;
