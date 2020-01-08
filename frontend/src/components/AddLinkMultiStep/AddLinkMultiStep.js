import React, { useState } from "react";

// import { makeStyles } from "@material-ui/core/styles";

import AddLinkStepOne from "./AddLinkStepOne";
import AddLinkStepTwo from "./AddLinkStepTwo";
import AddLinkStepThree from "./AddLinkStepThree";
import CustomStepper from "../Stepper/CustomStepper";
import AddLinkMultiStepStyles from "./AddLinkMultiStepStyles";

const AddLinkMultiStep = () => {
  const classes = AddLinkMultiStepStyles();

  const [step, setStep] = useState(0);
  const [linkInfo, setLinkInfo] = useState({
    linkName: "",
    product: "",
    promotions: "",
    notes: "",
    defaultUrl: "",
    utmParameters: "",
    linkErrors: ""
  });
  //   const [profiles, setProfiles] = useState([
  //     {
  //       first_name: "",
  //       last_name: ""
  //     }
  //   ]);

  const updateStep = operation => {
    operation === "add" ? setStep(step + 1) : setStep(step - 1);
  };

  const handleStepOneChange = e => {
    setLinkInfo({ ...linkInfo, [e.target.name]: e.target.value });
  };

  //   const handleChanges = (e, i) => {
  //     setProfiles(
  //       profiles.map((profile, idx) => {
  //         if (idx === i) {
  //           return { ...profile, [e.target.name]: e.target.value };
  //         } else {
  //           return profile;
  //         }
  //       })
  //     );
  //   };

  return step === 0 ? (
    <div className={classes.root}>
      <CustomStepper activeStep={step} />
      <div className={classes.wrapper}>
        <AddLinkStepOne
          step={step}
          updateStep={updateStep}
          linkInfo={linkInfo}
          setLinkInfo={setLinkInfo}
          handleStepOneChange={handleStepOneChange}
        />
      </div>
    </div>
  ) : step === 1 ? (
    <div className={classes.second}>
      <CustomStepper activeStep={step} />
      <div className={classes.wrapper}>
        <AddLinkStepTwo
          step={step}
          updateStep={updateStep}
          //   profiles={profiles}
          //   setProfiles={setProfiles}
          //   handleChanges={handleChanges}
        />
      </div>
    </div>
  ) : (
    <div className={classes.third}>
      <CustomStepper activeStep={step} />
      <div className={classes.wrapper}>
        <AddLinkStepThree
          step={step}
          updateStep={updateStep}
          //   profiles={profiles}
          //   info={info}
        />
      </div>
    </div>
  );
};

export default AddLinkMultiStep;
