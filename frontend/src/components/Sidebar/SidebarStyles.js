import { makeStyles } from "@material-ui/core";

const SidebarStyles = makeStyles(theme => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0px",
    borderRight: "1px solid black"
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  smallCircle: {
    height: "3rem",
    width: "3rem",
    backgroundColor: "rgb(91, 157, 219)",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "10px"
  },
  userSection: {
    margin: "50px 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    height: "10rem",
    width: "10rem",
    backgroundColor: "rgb(91, 157, 219)",
    borderRadius: "50%",
    display: "inline-block",
    marginBottom: "10px"
  },
  tabsSection: {
    width: "100%"
  },
  tab: {
    margin: "10px 0px",
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "repeat(6, 1fr)",
    alignItems: "center"
  },
  tabText: {
    gridColumn: "3/7",
    fontSize: "1.7rem"
  },
  userName: {
    fontSize: "1.7rem"
  },
  icon: {
    fontSize: "3rem"
  },
  logOutButton: {
    position: "absolute",
    bottom: "3rem",
    fontSize: "1.3rem"
  }
}));

export default SidebarStyles;
