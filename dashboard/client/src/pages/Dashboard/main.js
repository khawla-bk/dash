import React, { Component } from "react";
import "./Dashboard.css";
import MainDashboard from "./maindash";
import Sidebar from "./sideBar";

class mainDash extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <MainDashboard />
        <div className="dash-footer">
          <p>Powered by COMPANY NAME ©</p>
        </div>
      </div>
    );
  }
}
export default mainDash;
