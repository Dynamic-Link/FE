import React from "react";
import StepTwoStyles from "./StepTwoStyles";

const AddLinkStepTwo = ({
  step,
  updateStep,
  linkInfo,
  setLinkInfo,
  handleFormChange
}) => {
  const classes = StepTwoStyles();

  return (
    <div className={classes.container}>
      <div className={classes.topBar}>
        <div className={classes.back} onClick={() => updateStep("subtract")}>
          <i style={{ height: " 0.9rem" }} class="fas fa-chevron-left"></i>
          <p className={classes.backText}>Back</p>
        </div>
        <div className={classes.next} onClick={() => updateStep("add")}>
          <p className={classes.nextText}>Next</p>
          <i style={{ height: " 0.9rem" }} class="fas fa-chevron-right"></i>
        </div>
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

        <div>
          <p className={classes.title} style={{ marginTop: "2rem" }}>
            Default Destination URL: *
          </p>
          <input
            type="text"
            name="defaultUrl"
            className={classes.inputText}
            value={linkInfo.defaultUrl}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <p className={classes.title} style={{ marginTop: "2rem" }}>
            UTM Parameters: (optional)
          </p>
          <input
            type="text"
            name="utmParameters"
            className={classes.inputText}
            value={linkInfo.utmParameters}
            onChange={handleFormChange}
          />
        </div>
      </div>
    </div>
  );
};

export default AddLinkStepTwo;
