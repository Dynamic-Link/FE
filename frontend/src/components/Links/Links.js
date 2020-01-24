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
import Fuse from "fuse.js"

const keys = {
  LINKNAME: "linkName"
}
const { LINKNAME } = keys
const fuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 50,
  maxPatternLength: 12,
  minMatchCharLength: 3,
  keys: [LINKNAME]
}

const Links = props => {
  const classes = LinksStyles()
  const { user, setUser } = useContext(UserContext)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [sort, setSort] = useState("Link Name")
  const [query, setQuery] = useState("")
  const links = user && user[0].links
  const fuse = new Fuse(links, fuseOptions)
  const data = query ? fuse.search(query) : links
  console.log("data --->", data)
  console.log("fuse.search(query) --->", fuse.search(query))

  const onChange = e => {
    const { target = {} } = e
    const { value = "" } = target
    setQuery({ query: value })
  }

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
              // type="search"
              placeholder="Search"
              onChange={onChange}
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

        {links &&
          links.map((link, i) => {
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
