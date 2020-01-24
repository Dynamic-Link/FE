import React, { useContext, useState, useEffect } from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"
import { UserContext } from "../../context/UserContext"
import Sidebar from "../Sidebar/Sidebar"
import LinksStyles from "./LinksStyles"
import { Button } from "reactstrap"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import { LinkItem } from "./LinkItem"
import FuzzySearch from "../FuzzySearch/FuzzySearch"
import { Typography } from "@material-ui/core"
const Links = props => {
  const classes = LinksStyles()
  const { user, setUser } = useContext(UserContext)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [sort, setSort] = useState("Link Name")

  const links = user && user[0].links
  const [blogs, setBlogs] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    setBlogs(links)
    setData(links)
  }, [links])

  const toggle = () => setDropdownOpen(prevState => !prevState)
  const newLink = () => {
    props.history.push("/addLink")
  }

  return (
    <div className={classes.pageContainer}>
      <Sidebar />
      <div className={classes.container}>
        <div>
          <Breadcrumb className={classes.breadcrumbBackground}>
            <BreadcrumbItem active>
              <Typography variant="h2">All Links</Typography>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className={classes.topBar}>
          <div className={classes.addButton}>
            <button className={classes.newLinkButton} onClick={() => newLink()}>
              <Typography variant="button">Create New Link</Typography>
            </button>
          </div>
          <div className={classes.searchContainer}>
            {/* <input
              // type="search"
              placeholder="Search"
              onChange={onChange}
              className={classes.searchInput}
            /> */}
            <FuzzySearch blogs={blogs} setData={setData} />
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
                <DropdownItem
                  onClick={() => {
                    setSort("Link Name")
                    const sorted = data.sort(function(a, b) {
                      if (a.linkName < b.linkName) {
                        return -1
                      }
                      if (a.linkName > b.linkName) {
                        return 1
                      }
                      return 0
                    })
                    setData(sorted)
                  }}
                >
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
        {data &&
          data.map((link, i) => {
            return <LinkItem key={i} link={link} classes={classes} />
          })}
      </div>
    </div>
  )
}

// User: {
//   name: name
//   links: [
//     arrayIds
//   ]
// }

// Links: Link to users id

export default Links
