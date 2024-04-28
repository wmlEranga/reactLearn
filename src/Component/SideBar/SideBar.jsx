import React from "react";
import { Link } from "react-router-dom";
import { BiUser, BiBook, BiMessage } from "react-icons/bi";
import "../../Styles/SideBar/SideBar.css";
import CompanyProfile from "./companyProfile";

function SideBar() {
  return (
    <div className="menu">
      <div className="pharmacy-profile">
        <CompanyProfile />
      </div>

      <div className="menu--list">
        <Link to="/dashboard" className="item">
          <BiBook className="logo-icon" />
          Dashboard
        </Link>
        <Link to="/request-approval" className="item">
          <BiMessage className="logo-icon" />
          Request Approval
        </Link>
        <Link to="/profile" className="item">
          <BiUser className="logo-icon" />
          Profile
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
