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
  topBar: { marginBottom: "4rem" },
  overviewAndDestinations: {
    display: "flex",
    fontSize: "1.6rem",
    fontWeight: "500",
    color: "#121212"
  },
  overviewText: {
    marginRight: "2rem",
    color: "#cd9c9c",
    borderBottom: "2px solid rgb(240, 240, 240)",
    "&:active": {
      color: "#811810"
    },
    "&:hover": {
      color: "#811810",
      cursor: "pointer",
      borderBottom: "2px solid #811810"
    }
  },
  destinationsText: {
    color: "#cd9c9c",
    borderBottom: "2px solid rgb(240, 240, 240)",
    "&:active": {
      color: "#811810"
    },
    "&:hover": {
      color: "#811810",
      cursor: "pointer",
      borderBottom: "2px solid #811810"
    }
  },

  linkURL: {
    color: "black",
    fontSize: "1.8rem",
    marginBottom: "3rem",
    "&:hover": {
      textDecoration: "none"
    }
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
  },
  pastBreadcrumb: {
    color: "lightgray",
    "&:hover": {
      color: "lightgray"
    }
  },
  bodyContainer: {
    border: "1px solid red"
  },
  bodySectionOne: {
    border: "1px solid blue",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  linkInfoBox: {
    boxShadow: "0px 2px 4px rgba(14,30,37,0.12)",
    backgroundColor: "#f7f8fa",
    width: "70%",
    position: "relative",
    padding: "1rem"
  },
  infoText: {
    display: "flex",
    alignItems: "center"
  },
  infoCaption: {
    color: "#595959",
    fontSize: "1.3rem"
  },
  linkInfo: {
    fontSize: "1.3rem",
    margin: "1rem 0rem 1rem 1rem"
  },
  editButton: {
    backgroundColor: "#f7f8fa",
    display: "flex",
    border: "1px solid #e2e2ea",
    color: "#006fd7",
    borderRadius: "5px",
    padding: "1rem 2rem",
    fontSize: "1.6rem",
    position: "absolute",
    top: "1rem",
    right: "2rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
      border: "1px solid #9caccd"
    }
  },
  editText: {
    marginLeft: "1.5rem"
  }
}));

export default LinkOverviewStyles;
