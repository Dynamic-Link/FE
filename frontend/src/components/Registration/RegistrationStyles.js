import { makeStyles } from "@material-ui/core";

const RegistrationStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    borderRadius: "10px",
    minWidth: "90%",
    padding: "100px",
    height: "80vh"
  },
  form: {
    minWidth: "95%"
  },
  label: {
    fontSize: "1.8rem",
    padding: "0.65rem 0.5rem"
  },
  input: {
    fontSize: "2rem",
    marginLeft: "0.5rem"
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "center"
  },
  formButton: {
    minWidth: "20%",
    fontSize: "1.7rem",
    marginTop: "10px"
  },
  alreadyRegistered: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0px",
    fontSize: "1.3rem"
  },
  barContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px"
  },
  topBarTextContainer: {
    minWidth: "19%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  topBarText: {
    fontSize: "1.4rem",
    marginRight: "8px",
    color: "#6c757d"
  },
  topBarButton: {
    fontSize: "1.5rem",
    padding: "4px 15px",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
    color: "#6c757d",
    backgroundColor: "#fff",
    borderColor: "#6c757d"
  },
  circle: {
    maxHeight: "45rem",
    maxWidth: "45rem",
    backgroundColor: "rgb(91, 157, 219)",
    borderRadius: "50%",
    display: "inline-block"
  },
  smallCircle: {
    height: "3rem",
    width: "3rem",
    backgroundColor: "rgb(91, 157, 219)",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "10px"
  },
  logo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  formContainer: {
    maxWidth: "100%",
    paddingLeft: "25%",
    paddingTop: "15%"
  },
  image: {
    width: "120%",
    height: "100%"
  },
  formTitle: {
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: "1px",
    marginBottom: "10px"
  }
}));

export default RegistrationStyles;
