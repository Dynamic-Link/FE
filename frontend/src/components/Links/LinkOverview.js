import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import Sidebar from "../Sidebar/Sidebar";
import LinkOverviewStyles from "./LinkOverviewStyles";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
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
              <BreadcrumbItem active>All Links</BreadcrumbItem>
              <BreadcrumbItem>{currentLink.linkName}</BreadcrumbItem>
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

        <div>
          <p>Body</p>
        </div>
      </div>
    </div>
  );
};

export default LinkOverview;
