import { makeStyles } from "@material-ui/core"

const SidebarStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#336ab6",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0px",
    borderRight: "1px solid black",
    position: "fixed"
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
    padding: "2rem 0px",
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "repeat(6, 1fr)",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#f2f2f2",
      "& p": {
        color: "#595959"
      },
      "& i": {
        color: "#e4572d"
      }
    },
    "& i": {
      fontSize: "1.7rem",
      gridColumn: "2/3",
      color: "white"
    }
  },
  tabText: {
    gridColumn: "3/7",
    fontSize: "1.7rem",
    color: "white"
  },
  userName: {
    fontSize: "1.7rem",
    color: "#f2f2f2"
  },
  logOutButton: {
    position: "absolute",
    bottom: "3rem",
    fontSize: "1.3rem"
  }
}))

export default SidebarStyles
