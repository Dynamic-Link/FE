import React from "react";
import StepOneStyles from "./StepOneStyles";

const AddLinkStepOne = ({
  step,
  updateStep,
  linkInfo,
  setLinkInfo,
  handleStepOneChange
}) => {
  const classes = StepOneStyles();

  return (
    <div className={classes.container}>
      <div className={classes.topBar}>
        <button onClick={() => updateStep("add")}>next</button>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.contentLeft}>
          <div className={classes.linkNameContainer}>
            <p className={classes.title}>Link Name: *</p>
            <input
              type="text"
              name="linkName"
              className={classes.inputText}
              value={linkInfo.linkName}
              onChange={handleStepOneChange}
            />
          </div>
          <div className={classes.linkCreated}>
            <p className={classes.title}>Link Created: </p>
            <p
              className={classes.linkCreatedText}
            >{`http://dynamic.link/${linkInfo.linkName}`}</p>
          </div>

          <div>
            <p className={classes.title}>Select a product: *</p>
            <input
              type="text"
              name="product"
              className={classes.inputText}
              value={linkInfo.product}
              onChange={handleStepOneChange}
            />
          </div>

          <div>
            <p className={classes.title}>Promotion: (optional)</p>
            <input
              type="text"
              name="promotion"
              className={classes.inputText}
              value={linkInfo.promotion}
              onChange={handleStepOneChange}
            />
          </div>
        </div>
        <div className={classes.contentRight}>
          <div className={classes.notesContent}>
            <p>Notes: (optional)</p>
            <input
              type="textArea"
              placeholder="Notes"
              name="notes"
              value={linkInfo.notes}
              onChange={handleStepOneChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLinkStepOne;
