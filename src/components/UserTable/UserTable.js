import React from "react";
import { useSelector } from "react-redux";

import './UserTable.css'

const UserTable = () => {
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const email = useSelector((state) => state.email);
  const message = useSelector((state) => state.message);

  return (
    <div className="user-table-container">
      <h2>User Data</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{lastName}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Message</td>
            <td>{message}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
