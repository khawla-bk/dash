import React, { Component } from "react";
import LayoutDashboard from "../../layout/LayoutDashboard";
import "./Settings.css";

class SettingsPage extends Component {
  render() {
    return (
      <>
        <LayoutDashboard>
          <div className="set-container">
            <h1>Settings Page</h1>
          </div>
        </LayoutDashboard>
      </>
    );
  }
}

export default SettingsPage;
