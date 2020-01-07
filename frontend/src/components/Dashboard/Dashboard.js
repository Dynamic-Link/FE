import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "./../../context/UserContext";
import Sidebar from "../Sidebar/Sidebar";
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
    <div className={classes.pageContainer}>
      <Sidebar />
      <div className={classes.container}>
        <Typography variant="h2" style={{ margin: "4rem 0rem", color: "gray" }}>
          Dashboard
        </Typography>
        <div className={classes.statBoxContainer}>
          <div className={classes.statBox}>
            <i
              class="fad fa-link"
              style={{
                fontSize: "4.5rem",
                gridColumn: "1/3",
                margin: "0 auto"
              }}
            />
            <div className={classes.statBoxText}>
              <p className={classes.statBoxTextNumber}>
                {user ? Object.keys(user.links).length : null}
              </p>
              <p className={classes.statBoxTextHeading}>Total Links</p>
            </div>
          </div>
          <div className={classes.statBox}>
            <i
              class="fad fa-bullseye-pointer"
              style={{
                fontSize: "4.5rem",
                gridColumn: "1/3",
                margin: "0 auto"
              }}
            />
            <div className={classes.statBoxText}>
              <p className={classes.statBoxTextNumber}>0</p>
              <p className={classes.statBoxTextHeading}>Total Clicks</p>
            </div>
          </div>
          <div className={classes.statBox}>
            <i
              class="fad fa-users"
              style={{
                fontSize: "4.5rem",
                gridColumn: "1/3",
                margin: "0 auto"
              }}
            />
            <div className={classes.statBoxText}>
              <p className={classes.statBoxTextNumber}>0</p>
              <p className={classes.statBoxTextHeading}>Unique Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
