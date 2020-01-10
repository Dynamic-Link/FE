import React from "react";
import StepThreeStyles from "./StepThreeStyles";
import { Link } from "react-router-dom";

const AddLinkStepThree = ({
  step,
  updateStep,
  linkInfo,
  setLinkInfo,
  handleFormChange,
  subDestination,
  setSubDestination
}) => {
  const classes = StepThreeStyles();

  return (
    <div className={classes.container}>
      <div className={classes.topBar}>
        <div className={classes.back} onClick={() => updateStep("subtract")}>
          <i style={{ height: " 0.9rem" }} class="fas fa-chevron-left"></i>
          <p className={classes.backText}>Back</p>
        </div>
        <Link to="/" className={classes.next}>
          <button className={classes.createButton}>Create Link</button>
        </Link>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.fieldContainer}>
          <p className={classes.title}>Link Name: </p>
          <p className={classes.text}>{linkInfo.linkName}</p>
        </div>
        <div className={classes.fieldContainer}>
          <p className={classes.title}>Link Created: </p>
          <p
            className={classes.text}
          >{`http://dynamic.link/${linkInfo.linkName}`}</p>
        </div>

        <div className={classes.fieldContainer}>
          <p className={classes.title}>Product: </p>
          <p className={classes.text}>{linkInfo.product}</p>
        </div>

        <div className={classes.fieldContainer}>
          <p className={classes.title}>Default Destination:</p>
          <p className={classes.text}>{linkInfo.defaultUrl}</p>
        </div>

        <div
          className={classes.newSubDestination}
          onClick={() => {
            setSubDestination(true);
          }}
        >
          <p className={classes.subDestinationText}>New Sub-Destination</p>
        </div>
        {subDestination ? <div>opened</div> : <div>closed</div>}
      </div>
    </div>
  );
};

export default AddLinkStepThree;
