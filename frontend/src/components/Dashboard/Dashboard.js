import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "./../../context/UserContext";
import { Link } from "react-router-dom";
import DashboardStyles from "./DashboardStyles";
import { Typography } from "@material-ui/core";

const Dashboard = props => {
  const classes = DashboardStyles();
  const { user, setUser, clicked, setClicked, baseURL } = useContext(
    UserContext
  );
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${baseURL}/api/account/getUser`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.log(err));
  }, [clicked]);

  return (
    <div className={classes.container}>
      <Typography variant="h2" style={{ margin: "4rem 0rem", color: "gray" }}>
        Dashboard
      </Typography>
      <div className={classes.statBoxContainer}>
        <div className={classes.statBox}>
          <i
            class="fad fa-link"
            style={{ fontSize: "4.5rem", gridColumn: "1/3", margin: "0 auto" }}
          />
          <div className={classes.statBoxText}>
            <p className={classes.statBoxTextNumber}>0</p>
            <p className={classes.statBoxTextHeading}>Total Links</p>
          </div>
        </div>
        <div className={classes.statBox}>
          <i
            class="fad fa-bullseye-pointer"
            style={{ fontSize: "4.5rem", gridColumn: "1/3", margin: "0 auto" }}
          />
          <div className={classes.statBoxText}>
            <p className={classes.statBoxTextNumber}>0</p>
            <p className={classes.statBoxTextHeading}>Total Clicks</p>
          </div>
        </div>
        <div className={classes.statBox}>
          <i
            class="fad fa-users"
            style={{ fontSize: "4.5rem", gridColumn: "1/3", margin: "0 auto" }}
          />
          <div className={classes.statBoxText}>
            <p className={classes.statBoxTextNumber}>0</p>
            <p className={classes.statBoxTextHeading}>Unique Users</p>
          </div>
        </div>
      </div>
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
