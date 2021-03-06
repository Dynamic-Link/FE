import { makeStyles } from "@material-ui/core";

const StepOneStyles = makeStyles(theme => ({
  container: {
    boxShadow: "0px 2px 4px rgba(14,30,37,0.12)",
    backgroundColor: "f7f8fa",
    borderRadius: "5px",
    border: "1px solid #595959"
  },
  topBar: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "1rem"
  },
  contentContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    padding: "3rem"
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
    fontSize: "1.4rem",
    marginBottom: "0.3rem"
  },
  inputText: {
    width: "85%",
    borderRadius: "5px",
    border: "1px solid #595959",
    fontSize: "1.4rem",
    padding: "0.5rem",
    marginTop: "0.3rem"
  },
  linkCreated: {
    display: "flex",
    margin: "2rem 0rem",
    alignItems: "center"
  },
  linkCreatedText: {
    paddingLeft: "1rem",
    fontWeight: "900",
    fontSize: "1.4rem",
    marginBottom: ".3rem"
  },
  notesContent: {
    width: "100%"
  },
  notesBox: {
    height: "90%",
    width: "100%",
    resize: "none"
  },
  next: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  nextText: {
    fontSize: "1.6rem",
    marginRight: "5px"
  }
}));

export default StepOneStyles;
