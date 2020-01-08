import React, { useState, useContext } from "react";
import { Typography } from "@material-ui/core";
import { Button } from "reactstrap";
import SidebarStyles from "./SidebarStyles";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const Sidebar = props => {
  const { user } = useContext(UserContext);

  const classes = SidebarStyles();
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/signIn");
  };
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <div className={classes.smallCircle}></div>
        <Typography variant="h2">SmartLinks</Typography>
      </div>
      <div className={classes.userSection}>
        <div className={classes.circle}></div>
        <Typography className={classes.userName}>
          {user.firstName ? (
            `${user.firstName} ${user.lastName}`
          ) : (
            <p>Loading...</p>
          )}{" "}
        </Typography>
      </div>
      <div className={classes.tabsSection}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className={classes.tab}>
            <i
              class="fad fa-chart-area"
              style={{ fontSize: "1.7rem", gridColumn: "2/3" }}
            ></i>
            <Typography className={classes.tabText}>Dashboard</Typography>
          </div>
        </Link>
        <Link to="/links" style={{ textDecoration: "none" }}>
          <div className={classes.tab}>
            <i
              class="fad fa-link"
              style={{ fontSize: "1.7rem", gridColumn: "2/3" }}
            />
            <Typography className={classes.tabText}>All Links</Typography>
          </div>
        </Link>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <div className={classes.tab}>
            <i
              class="fad fa-layer-group"
              style={{ fontSize: "1.7rem", gridColumn: "2/3" }}
            ></i>
            <Typography className={classes.tabText}>Product List</Typography>
          </div>
        </Link>
      </div>
      <Button
        color="danger"
        className={classes.logOutButton}
        onClick={() => logout()}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default Sidebar;
