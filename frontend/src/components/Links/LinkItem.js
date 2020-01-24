import React from "react"

export const LinkItem = ({ classes, link }) => {
  return (
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
  )
}