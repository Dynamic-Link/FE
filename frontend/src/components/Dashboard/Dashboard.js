import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "./../../context/UserContext";
import { Link } from "react-router-dom";

const Dashboard = props => {
  const { user, setUser, clicked, setClicked } = useContext(UserContext);

  useEffect(() => {
    const headers = { token: props.token };
    console.log("dashboard effect");
    console.log("user", user);
    console.log(clicked);
    axios
      .get(`${props.baseURL}/api/account/getUser`, {
        headers
      })
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, [clicked]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      {user.links !== undefined
        ? user.links.map(link => {
            return (
              <div>
                <p>Name: {link.linkName}</p>
                <p>Product: {link.product}</p>
                <p>Promotions: {link.promotions}</p>
                <p>Notes: {link.notes}</p>
                <p>Default URL: {link.defaultUrl}</p>
                <p>UTM Parameters: {link.utmParameters}</p>
              </div>
            );
          })
        : null}

      <Link to="/addLink">Add Link</Link>
    </div>
  );
};

export default Dashboard;
