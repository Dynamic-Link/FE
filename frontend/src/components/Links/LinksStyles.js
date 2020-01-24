import { makeStyles } from "@material-ui/core";

const LinksStyles = makeStyles(theme => ({
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
  newLinkButton: {
    fontSize: "1.4rem",
    padding: "0.5rem 2rem",
    borderRadius: "5px",
    backgroundImage: "linear-gradient(90deg , #0092d9, #006fd7, #004dab)",
    border: "none",
    color: "#f2f2f2",
    boxShadow: "0px 2px 4px rgba(14, 30, 37, 0.22)",
    "&:hover": {
      backgroundImage: "linear-gradient(90deg , #004dab, #004dab, #004dab)"
    }
  },
  topBar: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    marginBottom: "2rem"
  },
  addButton: {
    gridColumn: "1/2"
  },
  linkBoxContainer: {
    display: "flex",
    "& span": {
      minWidth: "5px",
      // padding: "1.2rem, 0rem",
      marginBottom: "2rem"
    },
    "&:hover": {
      cursor: "pointer",
      "& span": {
        backgroundImage: "linear-gradient(180deg, #e4572d, #b8351c, #811810)",
        borderRadius: "5px 0px 0px 5px"
      }
    }
  },
  linkBox: {
    backgroundColor: "#f7f8fa",
    boxShadow: "0px 2px 4px rgba(14,30,37,0.12)",
    padding: "1.2rem",
    marginBottom: "2rem",
    borderRadius: "3px 0px 0px 3px",
    width: "100%"
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
  }
}));

export default LinksStyles;
