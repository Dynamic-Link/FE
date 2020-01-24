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

  return user[0] ? (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <div className={classes.smallCircle}></div>
        <Typography variant="h3">SmartLinks</Typography>
      </div>
      <div className={classes.userSection}>
        <div className={classes.circle}></div>
        <Typography className={classes.userName}>
          {user[0].firstName ? (
            `${user[0].firstName} ${user[0].lastName}`
          ) : (
            <p>Loading...</p>
          )}{" "}
        </Typography>
      </div>
      <div className={classes.tabsSection}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className={classes.tab}>
            <i class="fad fa-chart-area"></i>
            <p className={classes.tabText}>Dashboard</p>
          </div>
        </Link>
        <Link to="/links" style={{ textDecoration: "none" }}>
          <div className={classes.tab}>
            <i class="fad fa-link" />
            <p className={classes.tabText}>All Links</p>
          </div>
        </Link>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <div className={classes.tab}>
            <i class="fad fa-layer-group"></i>
            <p className={classes.tabText}>Product List</p>
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
  ) : null;
};

export default Sidebar;
