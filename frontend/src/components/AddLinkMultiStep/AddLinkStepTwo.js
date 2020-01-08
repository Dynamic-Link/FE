import React from "react";

const AddLinkStepTwo = ({ step, updateStep, linkInfo }) => {
  return (
    <div>
      <h1>step two</h1>
      <button onClick={() => updateStep("subtract")}>back</button>
      <button onClick={() => updateStep("add")}>next</button>
      <p>{step}</p>
    </div>
  );
};

export default AddLinkStepTwo;
