import { makeStyles } from "@material-ui/core";

const LinksStyles = makeStyles(theme => ({
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
  newLinkButton: {
    fontSize: "1.4rem",
    padding: "0.5rem 2rem"
  },
  topBar: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)"
  },
  searchAndSort: {
    gridColumn: "3/5",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "4rem"
  },
  sortList: {
    display: "flex",
    alignItems: "center"
  },
  linkBox: {
    border: "1px solid darkgray",
    padding: "1.2rem",
    marginBottom: "2rem",
    backgroundColor: "white"
  },
  linkName: {
    fontSize: "2.4rem"
  },
  clicksAndUsers: {
    display: "grid",
    gridTemplateColumns: "repeat(6,1fr)"
  },
  notes: {
    gridColumn: "1/5"
  }
}));

export default LinksStyles;
