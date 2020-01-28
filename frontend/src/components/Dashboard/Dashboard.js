import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import { UserContext } from "./../../context/UserContext"
import Sidebar from "../Sidebar/Sidebar"
import DashboardStyles from "./DashboardStyles"
import { Typography } from "@material-ui/core"
import { Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Route } from "react-router-dom"

const Dashboard = props => {
  const classes = DashboardStyles()
  const { user, baseURL, setUser } = useContext(UserContext)
  useEffect(() => {
    axios
      .get(`${baseURL}/api/user`)
      .then(res => {
        setUser(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className={classes.pageContainer}>
      <Sidebar />
      <div className={classes.container}>
        <div>
          <Breadcrumb className={classes.breadcrumbBackground}>
            <BreadcrumbItem active>
              <Typography variant="h2">Dashboard</Typography>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className={classes.statBoxContainer}>
          <div className={classes.statBox}>
            <i
              className="fad fa-link"
              style={{
                fontSize: "4.5rem",
                gridColumn: "1/3",
                margin: "0 auto",
                color: "#336ab6"
              }}
            />
            <div className={classes.statBoxText}>
              <p className={classes.statBoxTextNumber}>
                {user ? user[0].links.length : null}
              </p>
              <Typography variant="caption">Total Links</Typography>
            </div>
          </div>
          <div className={classes.statBox}>
            <i
              className="fad fa-bullseye-pointer"
              style={{
                fontSize: "4.5rem",
                gridColumn: "1/3",
                margin: "0 auto",
                color: "#336ab6"
              }}
            />
            <div className={classes.statBoxText}>
              <p className={classes.statBoxTextNumber}>0</p>
              <Typography variant="caption">Total Clicks</Typography>
            </div>
          </div>
          <div className={classes.statBox}>
            <i
              className="fad fa-users"
              style={{
                fontSize: "4.5rem",
                gridColumn: "1/3",
                margin: "0 auto",
                color: "#336ab6"
              }}
            />
            <div className={classes.statBoxText}>
              <p className={classes.statBoxTextNumber}>0</p>
              <Typography variant="caption">Unique Users</Typography>
            </div>
          </div>
        </div>
        <div className={classes.mapContainer}>
          <div className={classes.mapLeftSide}>
            <div className={classes.mapTitleAndLogo}>
              <i
                className="fad fa-globe-americas"
                style={{ fontSize: "6rem", color: "#336ab6" }}
              ></i>
              <p className={classes.mapTitle}>Global Clicks by Top Locations</p>
            </div>
            <div className={classes.mapList}>Map List</div>
          </div>
          <div className={classes.mapRightSide}>
            <div className={classes.mapImage}>Actual Map Image</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
