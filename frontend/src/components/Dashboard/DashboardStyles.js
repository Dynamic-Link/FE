import { makeStyles } from "@material-ui/core";

const DashboardStyles = makeStyles(theme => ({
  pageContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(7,1fr)"
  },
  container: {
    gridColumn: "2/8",
    padding: "0rem 4rem",
    backgroundColor: "#f1f0f5",
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
    alignItems: "center",
    padding: "2rem 0rem",
    boxShadow: "0px 2px 4px rgba(14,30,37,0.12)",
    backgroundColor: "#f7f8fa"
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
  },
  breadcrumbBackground: {
    "& ol": {
      backgroundColor: "#f1f0f5",
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
  mapContainer: {
    marginTop: "5rem",
    display: "grid",
    gridTemplateColumns: "repeat(7,1fr)",
    padding: "0rem 2rem",
    boxShadow: "0px 2px 4px rgba(14,30,37,0.12)",
    backgroundColor: "#f7f8fa"
  },
  mapLeftSide: {
    gridColumn: "1/5",
    display: "flex",
    flexDirection: "column"
  },
  mapRightSide: {
    gridColumn: "5/8"
  },
  mapTitleAndLogo: {
    display: "flex",
    fontSize: "2.4rem",
    padding: "2rem 0rem",
    alignItems: "center"
  },
  mapTitle: {
    marginLeft: "2rem"
  }
}));

export default DashboardStyles;
