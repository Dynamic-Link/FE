import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Sidebar from "../Sidebar/Sidebar";
import LinksStyles from "./LinksStyles";
import { Button } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const LinkOverview = props => {
  const classes = LinksStyles();
  const { user } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sort, setSort] = useState("Product Name");

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const newLink = () => {
    props.history.push("/addLink");
  };

  return (
    <div className={classes.pageContainer}>
      <Sidebar />
      <div className={classes.container}>
        <div>
          <Breadcrumb className={classes.breadcrumbBackground}>
            <BreadcrumbItem active>All Links</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className={classes.topBar}>
          <div className={classes.addButton}>
            <Button
              color="success"
              className={classes.newLinkButton}
              onClick={() => newLink()}
            >
              Create New Link
            </Button>
          </div>
          <div className={classes.searchContainer}>
            <input
              type="search"
              placeholder="Search"
              className={classes.searchInput}
            />
          </div>
        </div>

        {user.links !== undefined
          ? user.links.map(link => {
              return (
                <div className={classes.linkBox}>
                  <h2 className={classes.linkName}>{link.linkName}</h2>

                  <p>Default URL: {link.defaultUrl}</p>
                  <p>Promotions: {link.promotions}</p>
                  <div className={classes.clicksAndUsers}>
                    <p className={classes.notes}>Notes: {link.notes}</p>
                    <p>Total Clicks</p>
                    <p>Unique Users</p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default LinkOverview;
