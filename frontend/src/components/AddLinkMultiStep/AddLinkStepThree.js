import React from "react";

const AddLinkStepThree = ({ step, updateStep, linkInfo }) => {
  return (
    <div>
      <h1>step three</h1>
      <button onClick={() => updateStep("subtract")}>back</button>
      <p>{step}</p>
    </div>
  );
};

export default AddLinkStepThree;
