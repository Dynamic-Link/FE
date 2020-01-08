import { makeStyles } from "@material-ui/core";

const StepOneStyles = makeStyles(theme => ({
  container: {
    border: "1px solid black"
  },
  topBar: {
    display: "flex",
    border: "1px solid red",
    justifyContent: "flex-end",
    padding: "1rem"
  },
  contentContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "1rem"
  },
  contentRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  linkNameContainer: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    fontSize: "1.4rem"
  },
  inputText: {
    fontSize: "1.4rem",
    width: "85%"
  },
  linkCreated: {
    display: "flex",
    margin: "2rem 0rem",
    alignItems: "center"
  },
  linkCreatedText: {
    paddingLeft: "1rem",
    fontWeight: "900",
    fontSize: "1.4rem"
  }
}));

export default StepOneStyles;
