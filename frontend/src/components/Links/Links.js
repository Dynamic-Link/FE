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
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Links = props => {
  const classes = LinksStyles();
  const { user } = useContext(UserContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sort, setSort] = useState("Link Name");

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
            <button className={classes.newLinkButton} onClick={() => newLink()}>
              Create New Link
            </button>
          </div>
          <div className={classes.searchContainer}>
            <input
              type="search"
              placeholder="Search"
              className={classes.searchInput}
            />
          </div>

          <div className={classes.sortList}>
            <p className={classes.sortBy}>Sort by: </p>
            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggle}
              style={{ width: "50%" }}
            >
              <DropdownToggle style={{ width: "100%" }} caret>
                {sort}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => setSort("Link Name")}>
                  Link Name
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
        {console.log(user)}
        {user
          ? user[0].links.map(link => {
              return (
                <div className={classes.linkBoxContainer}>
                  <div className={classes.hoveredBox}>&nbsp</div>
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
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

// User: {
//   name: name
//   links: [
//     arrayIds
//   ]
// }

// Links: Link to users id

export default Links;
