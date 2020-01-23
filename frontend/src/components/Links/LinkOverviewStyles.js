import { makeStyles } from "@material-ui/core";

const LinkOverviewStyles = makeStyles(theme => ({
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
    gridTemplateColumns: "repeat(4, 1fr)",
    marginBottom: "2rem"
  },
  addButton: {
    gridColumn: "1/2"
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
  },
  searchContainer: {
    gridColumn: "3/4",
    display: "flex"
  },
  searchInput: {
    display: "flex",
    width: "70%"
  },
  sortList: {
    display: "flex",
    alignItems: "center",
    gridColumn: "4/5",
    justifyContent: "flex-end"
  },
  sortBy: {
    fontSize: "1.8rem",
    marginRight: "1rem"
  },
  breadcrumbBackground: {
    "& ol": {
      backgroundColor: "#f2f2f2",
      padding: "0",
      margin: "4rem 0rem",
      "& li": {
        fontSize: "2.4rem",
        "& a": {
          "&:hover": {
            textDecoration: "none"
          }
        }
      }
    }
  }
}));

export default LinkOverviewStyles;
