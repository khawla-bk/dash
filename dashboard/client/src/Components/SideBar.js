import React from "react";
import { connect } from "react-redux";
import { LOGOUT } from "../redux/constants/userTypes";

function sideBar({ logout }) {
  return (
    <div>
      <div className="sidebar">
        <div className="logo-details">
          <div className="logo">
            <img src="/logo.png" alt="logo" />
            <p className="logo-name">COMPANY NAME</p>
          </div>
          <i className="bx bx-menu" id="btn" />
        </div>
        <ul className="nav-list">
          <li>
            <a href="/">
              <i className="bx bx-search-alt" />
              <input type="text" placeholder="Search.." />
            </a>
          </li>
          <li>
            <a href="/main-dashboard">
              <i className="bx bx-grid-alt" />
              <span>Main Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/user-page">
              <i className="bx bx-user" />
              <span>User</span>
            </a>
          </li>
          <li>
            <a href="/settings">
              <i className="bx bx-cog" />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="/report-issues">
              <i className="bx bx-error-circle" />
              <span>Report issues</span>
            </a>
          </li>
        </ul>
        <div className="profile-content">
          <div className="profile">
            <div className="profile-details">
              <img src="avatar.png" alt="avatar" />
              <div className="name-job">
                <div className="name">Welcome back!</div>
                <div className="job">John Doe</div>
              </div>
            </div>
            <button onClick={logout} style={{ color: "white" }}>
              <i className="bx bx-log-out" id="logout" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchtoProps = (dispatch) => ({
  logout: () => dispatch({ type: LOGOUT }),
});
export default connect(null, mapDispatchtoProps)(sideBar);
