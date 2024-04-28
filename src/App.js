import React, { useState } from "react";
import SideBar from "./Component/SideBar/SideBar";

import Header from "./Component/Header/Header";
import "./App.css";
import DashboardComponent from "./Component/Dashboard/Dashboard";
import RequestApprovalComponent from "./Component/RequestApproval/RequestApproval";
import ProfileComponent from "./Component/Profile/Profile";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  const handleSidebarItemClick = (itemName) => {
    setSelectedComponent(itemName);
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "Dashboard":
        return <DashboardComponent />;
      case "Request Approval":
        return <RequestApprovalComponent />;
      case "Profile":
        return <ProfileComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <SideBar onItemClick={handleSidebarItemClick} />
      <div className="dashboard--wrap">
        <div>
          <Header />
        </div>
        <div className="dashboard--content">{renderSelectedComponent()}</div>
      </div>
    </div>
  );
}

export default App;
