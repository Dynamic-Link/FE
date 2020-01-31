import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import Sidebar from "../Sidebar/Sidebar";
import LinkOverviewStyles from "./LinkOverviewStyles";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Typography } from "@material-ui/core";
import axios from "axios";

const LinkOverview = props => {
  const classes = LinkOverviewStyles();
  const { user, baseURL } = useContext(UserContext);
  const currentLinkId = props.match.params.id;
  const token = localStorage.getItem("token");
  const [currentLink, setCurrentLink] = useState({});

  // currentLink = {  id: 2;
  //   linkName: "link";
  //   product: "n";
  //   promotions: "";
  //   notes: "notes";
  //   defaultUrl: "url";
  //   utmParameters: "parameter";
  //   user_id: 3;}

  useEffect(() => {
    axios
      .get(`${baseURL}/api/links/${currentLinkId}`, {
        headers: { Authorization: `${token}` }
      })
      .then(res => setCurrentLink(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={classes.pageContainer}>
      <Sidebar />
      {console.log(currentLink)}

      <div className={classes.container}>
        <div className={classes.topBar}>
          <div className={classes.breadCrumbs}>
            <Breadcrumb className={classes.breadcrumbBackground}>
              <BreadcrumbItem>
                <a href="/links" className={classes.pastBreadcrumb}>
                  All Links
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem active>{currentLink.linkName}</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className={classes.linkURL}>
            <a href="#">{`http://smrtlink.to/${currentLink.defaultUrl}`}</a>
          </div>
          <div className={classes.overviewAndDestinations}>
            <p className={classes.overviewText}>Overview</p>
            <p className={classes.destinationsText}>Destinations</p>
          </div>
        </div>

        <div className={classes.bodyContainer}>
          <div className={classes.bodySectionOne}>
            <div className={classes.linkInfoBox}>
              <Typography variant="h2" style={{ letterSpacing: ".05rem" }}>
                Link Information
              </Typography>
              <span className={classes.infoText}>
                <p className={classes.infoCaption}>Link Name:</p>
                <p className={classes.linkInfo}>{currentLink.linkName}</p>
              </span>
              <span className={classes.infoText}>
                <p className={classes.infoCaption}>Product: </p>
                <p className={classes.linkInfo}>{currentLink.product}</p>
              </span>
              <span className={classes.infoText}>
                <p className={classes.infoCaption}>Promotions: </p>
                <p className={classes.linkInfo}>{currentLink.promotions}</p>
              </span>
              <span className={classes.infoText}>
                <p className={classes.infoCaption}>Notes: </p>
                <p className={classes.linkInfo}>{currentLink.notes}</p>
              </span>
              <button className={classes.editButton}>
                <i class="fas fa-pencil"></i>
                <p className={classes.editText}>Edit</p>
              </button>
            </div>
            <div className={classes.clicksAndUsers}>
              <div className={classes.clicksBox}>Clicks</div>
              <div className={classes.usersBox}>Users</div>
            </div>
          </div>
          <div className={classes.bodySectionTwo}>
            <p>Body</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkOverview;
