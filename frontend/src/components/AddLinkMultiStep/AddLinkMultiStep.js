import React, { useState } from "react";

// import { makeStyles } from "@material-ui/core/styles";

import AddLinkStepOne from "./AddLinkStepOne";
import AddLinkStepTwo from "./AddLinkStepTwo";
import AddLinkStepThree from "./AddLinkStepThree";
import CustomStepper from "../Stepper/CustomStepper";
import AddLinkMultiStepStyles from "./AddLinkMultiStepStyles";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const AddLinkMultiStep = () => {
  const classes = AddLinkMultiStepStyles();

  const [step, setStep] = useState(0);
  const [subDestination, setSubDestination] = useState(false);
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

  const handleFormChange = e => {
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

  return (
    <div>
      <div>
        <Breadcrumb className={classes.breadcrumbBackground}>
          <BreadcrumbItem>
            <a href="/" className={classes.pastBreadcrumb}>
              All Links
            </a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Create New Link</BreadcrumbItem>
        </Breadcrumb>
      </div>
      {step === 0 ? (
        <div className={classes.root}>
          <CustomStepper activeStep={step} />
          <div className={classes.wrapper}>
            <AddLinkStepOne
              updateStep={updateStep}
              linkInfo={linkInfo}
              handleFormChange={handleFormChange}
            />
          </div>
        </div>
      ) : step === 1 ? (
        <div className={classes.second}>
          <CustomStepper activeStep={step} />
          <div className={classes.wrapper}>
            <AddLinkStepTwo
              updateStep={updateStep}
              handleFormChange={handleFormChange}
              linkInfo={linkInfo}
            />
          </div>
        </div>
      ) : (
        <div className={classes.third}>
          <CustomStepper activeStep={step} />
          <div className={classes.wrapper}>
            <AddLinkStepThree
              updateStep={updateStep}
              linkInfo={linkInfo}
              handleFormChange={handleFormChange}
              subDestination={subDestination}
              setSubDestination={setSubDestination}
            />
          </div>
        </div>
      )}
      ;
    </div>
  );
};

export default AddLinkMultiStep;
