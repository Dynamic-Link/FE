import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "./../../context/UserContext";
import Sidebar from "../Sidebar/Sidebar";
import DashboardStyles from "./DashboardStyles";
import { Typography } from "@material-ui/core";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Dashboard = props => {
  const classes = DashboardStyles();
  const { user } = useContext(UserContext);

  return (
    <div className={classes.pageContainer}>
      <Sidebar />
      <div className={classes.container}>
        <div>
          <Breadcrumb className={classes.breadcrumbBackground}>
            <BreadcrumbItem active>Dashboard</BreadcrumbItem>
          </Breadcrumb>
        </div>
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
                {user ? user[0].links.length : null}
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
        <div className={classes.mapContainer}>
          <div className={classes.mapLeftSide}>
            <div className={classes.mapTitleAndLogo}>
              <i class="fad fa-globe-americas" style={{ fontSize: "6rem" }}></i>
              <p className={classes.mapTitle}>Global Clicks by Top Locations</p>
            </div>
            <div className={classes.mapList}>Map List</div>
          </div>
          <div className={classes.mapRightSide}>
            <div className={classes.mapImage}>Actual Map Image</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
