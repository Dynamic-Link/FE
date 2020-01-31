import React from "react";
import { Link } from "react-router-dom";

export const LinkItem = ({ classes, link }) => {
  return (
    <Link to={`/links/${link.id}`} className={classes.link}>
      <div className={classes.linkBoxContainer}>
        <span></span>
        <div className={classes.linkBox}>
          <h2 className={classes.linkName}>{link.linkName}</h2>

          <p>Default URL: {link.defaultUrl}</p>
          <p>Promotions: {link.promotions}</p>
          <div className={classes.clicksAndUsers}>
            <p className={classes.notes}>Notes: {link.notes}</p>
            <p>Total Clicks</p>
            <p></p>
            <p>Unique Users</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
