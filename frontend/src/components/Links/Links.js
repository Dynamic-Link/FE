import React, { useContext, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { UserContext } from "../../context/UserContext";
import Sidebar from "../Sidebar/Sidebar";
import LinksStyles from "./LinksStyles";
import { Typography } from "@material-ui/core";
import { Button } from "reactstrap";

const Links = props => {
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
        <Typography variant="h2" style={{ margin: "4rem 0rem", color: "gray" }}>
          All Links
        </Typography>

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
          <div className={classes.searchAndSort}>
            <input type="search" placeholder="Search" />

            <div className={classes.sortList}>
              <p>Sort by: </p>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>{sort}</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => setSort("Product Name")}>
                    Product Name
                  </DropdownItem>
                  <DropdownItem onClick={() => setSort("Date")}>
                    Date
                  </DropdownItem>
                  <DropdownItem onClick={() => setSort("Total Clicks")}>
                    Total Clicks
                  </DropdownItem>
                  <DropdownItem onClick={() => setSort("Unique Users")}>
                    Unique Users
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
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

export default Links;
