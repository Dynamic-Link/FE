import { makeStyles } from "@material-ui/core";

const DashboardStyles = makeStyles(theme => ({
  pageContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(7,1fr)"
  },
  container: {
    gridColumn: "2/8",
    padding: "0rem 4rem",
    backgroundColor: "rgb(240, 240, 240)",
    borderRight: "1px solid black"
  },
  statBoxContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridColumnGap: "8rem",
    justifyContent: "space-between"
  },
  statBox: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    backgroundColor: "white",
    alignItems: "center",
    border: "1px solid black",
    padding: "2rem 0rem"
  },
  statBoxText: {
    gridColumn: "3/6"
  },
  statBoxTextNumber: {
    fontSize: "3.6rem",
    marginBottom: "10px"
  },
  statBoxTextHeading: {
    fontSize: "1.8rem"
  }
}));

export default DashboardStyles;
