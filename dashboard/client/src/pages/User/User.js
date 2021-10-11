import axios from "axios";
import React, { useState, useEffect } from "react";
import LayoutDashboard from "../../layout/LayoutDashboard";
import "./User.css";

const UserPage = () => {
  const [users, setUsers] = useState([]);

  const refresh = () => {
    axios
      .get("/api/auth/all")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setUsers([]);
      });
  };

  useEffect(() => {
    refresh();
  }, []);
  return (
    <LayoutDashboard>
      <div className="user-info">
        <div className="profiles">
          <h2>Users List</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Post</th>
                  <th>Role</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.post}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default UserPage;
