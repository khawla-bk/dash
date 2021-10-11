import React from "react";
import "../pages/Dashboard/Dashboard.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LOGOUT } from "../redux/constants/userTypes";

function sideBar({ user, logout }) {
  console.log(user);
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
            <Link to="/main-dashboard">
              <i className="bx bx-grid-alt" />
              <span>Main Dashboard</span>
            </Link>
          </li>
          {user?.role === "ADMIN" && (
            <li>
              <Link to="/user-page">
                <i className="bx bx-user" />
                <span>Users</span>
              </Link>
            </li>
          )}
          <li>
            <Link to="/settings">
              <i className="bx bx-cog" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/report-issues">
              <i className="bx bx-error-circle" />
              <span>Report issues</span>
            </Link>
          </li>
        </ul>
        <div className="profile-content">
          <div className="profile">
            <div className="profile-details">
              <img src="/avatar.png" alt="avatar" />
              <div className="name-job">
                <div className="name">Welcome back!</div>
                <div className="job">{user.name}</div>
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(sideBar);
