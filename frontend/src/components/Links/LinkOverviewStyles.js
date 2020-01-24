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
  topBar: {
    border: "1px solid red"
  },
  overviewAndDestinations: {
    display: "flex",
    fontSize: "1.6rem",
    fontWeight: "500",
    color: "#121212"
  },
  overviewText: {
    marginRight: "1rem"
  },
  destinationsText: {},

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
