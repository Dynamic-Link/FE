import { makeStyles } from "@material-ui/core";

const StepThreeStyles = makeStyles(theme => ({
  container: {
    boxShadow: "0px 2px 4px rgba(14,30,37,0.12)",
    backgroundColor: "f7f8fa",
    borderRadius: "5px",
    border: "1px solid #595959"
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem"
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "3rem"
  },
  contentRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  fieldContainer: {
    display: "flex",
    margin: "1.5rem 0rem",
    alignItems: "center"
  },
  title: {
    fontSize: "1.4rem",
    marginRight: "0.3rem"
  },
  text: {
    paddingLeft: "1rem",
    fontWeight: "900",
    fontSize: "1.4rem"
  },
  inputText: {
    width: "90%",
    borderRadius: "5px",
    border: "1px solid #595959",
    fontSize: "1.4rem",
    padding: "0.5rem",
    marginTop: "0.3rem"
  },
  next: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  back: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  nextText: {
    fontSize: "1.6rem",
    marginRight: "5px"
  },
  backText: {
    fontSize: "1.6rem",
    marginLeft: "5px"
  },
  newSubDestination: {
    display: "flex",
    cursor: "pointer"
  },
  subDestinationText: {
    border: "1px solid #595959",
    borderRadius: "5px",
    padding: "0.5rem 1rem"
  },
  createButton: {
    backgroundImage: "linear-gradient(90deg, #0092d9, #006fd7, #004dab)",
    border: "none",
    color: "#f2f2f2",
    borderRadius: "5px",
    padding: "0.5rem 3rem",
    fontSize: "1.6rem",
    "&:hover": {
      backgroundImage: "linear-gradient(90deg, #004dab, #004dab, #004dab)"
    }
  }
}));

export default StepThreeStyles;
