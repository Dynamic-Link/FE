import { makeStyles } from "@material-ui/core";

const AddLinkMultiStepStyles = makeStyles(theme => ({
  app: {
    width: "100%"
  },
  header: {
    marginBottom: "2rem"
    // For mobiles and smaller
    // ["@media (max-width:500px)"]: {
    //   fontSize: "19px",
    //   marginTop: "5%"
    // }
  },
  h1: {
    // // For mobiles and smaller
    // ["@media (max-width:500px)"]: {
    //   fontSize: "19px",
    //   alignContent: "center",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   margin: "0 auto",
    //   width: "375px"
    // }
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto"
  },
  second: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  third: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  wrapper: {
    width: "85%"
  }
}));

export default AddLinkMultiStepStyles;
