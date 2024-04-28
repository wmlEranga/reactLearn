import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./Component/SideBar/SideBar";
import Header from "./Component/Header/Header";
import DashboardComponent from "./Component/Dashboard/Dashboard";
import RequestApprovalComponent from "./Component/RequestApproval/RequestApproval";
import ProfileComponent from "./Component/Profile/Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="dashboard">
        <div>
          <SideBar />
        </div>
        <div className="dashboard--wrap">
          <div>
            <Header />
          </div>
          <div className="dashboard--content">
            <Routes>
              <Route path="/dashboard" element={<DashboardComponent />} />
              <Route
                path="/request-approval"
                element={<RequestApprovalComponent />}
              />
              <Route path="/profile" element={<ProfileComponent />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
