import React from "react"
import StepOneStyles from "./StepOneStyles"

const AddLinkStepOne = ({ updateStep, linkInfo, handleFormChange }) => {
  const classes = StepOneStyles()

  return (
    <div className={classes.container}>
      <div className={classes.topBar}>
        <div className={classes.next} onClick={() => updateStep("add")}>
          <p className={classes.nextText}>Next</p>
          <i style={{ height: " 0.9rem" }} class="fas fa-chevron-right"></i>
        </div>
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
              onChange={handleFormChange}
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
              onChange={handleFormChange}
            />
          </div>

          <div>
            <p className={classes.title} style={{ marginTop: "2rem" }}>
              Promotion: (optional)
            </p>
            <input
              type="text"
              name="promotions"
              className={classes.inputText}
              value={linkInfo.promotions}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <div className={classes.contentRight}>
          <div className={classes.notesContent}>
            <p className={classes.title}>Notes: (optional)</p>
            <textarea
              placeholder="Notes"
              name="notes"
              value={linkInfo.notes}
              onChange={handleFormChange}
              className={classes.notesBox}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddLinkStepOne
