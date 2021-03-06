import React from "react";

//material
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
// import { StepConnector } from "@material-ui/core";
import LensIcon from "@material-ui/icons/Lens";

const CustomStepper = props => {
  const classes = makeStyles(theme => ({
    stepContainer: {
      // For mobiles and smaller
      ["@media (max-width:500px)"]: {
        width: "100px",
        alignItems: "center",
        margin: "0 auto"
      }
    },
    stepper: {
      background: "rgba(0,0,0,0)",
      width: "300px",
      padding: "2px",
      margin: "15px 0px",
      // For mobiles and smaller
      ["@media (max-width:500px)"]: {
        width: "298px"
      }
    },
    icon: {
      zIndex: 2,
      color: "#9caccd",
      "& $active": {
        color: "#006fd7"
      }
    }
  }))();

  // const connectorClasses = makeStyles(theme => ({
  //   connectorActive: {
  //     "& $connectorLine": {
  //       borderTop: "8px solid #5b4eff",
  //       borderRadius: "2px",
  //       marginTop: "-3.5px",
  //       // For mobiles and smaller
  //       ["@media (max-width:500px)"]: {
  //         width: "100px"
  //       }
  //     }
  //   },
  //   connectorCompleted: {
  //     "& $connectorLine": {
  //       borderTop: "8px solid #5b4eff",
  //       borderRadius: "2px",
  //       marginTop: "-3.5px",
  //       // For mobiles and smaller
  //       ["@media (max-width:500px)"]: {
  //         width: "100px"
  //       }
  //     }
  //   },
  //   connectorDisabled: {
  //     "& $connectorLine": {
  //       borderTop: "8px solid #d0ccff",
  //       borderRadius: "2px",
  //       marginTop: "-3.5px",
  //       // For mobiles and smaller
  //       ["@media (max-width:500px)"]: {
  //         width: "100px"
  //       }
  //     }
  //   },
  //   connectorLine: {
  //     "& $connectorLine": {
  //       borderTop: "8px solid #d0ccff",
  //       borderRadius: "2px",
  //       marginTop: "-3.5px",
  //       // For mobiles and smaller
  //       ["@media (max-width:500px)"]: {
  //         width: "100px"
  //       }
  //     },
  //     transition: theme.transitions.create("border-color")
  //   },
  //   connectorRoot: {
  //     zIndex: 0,
  //     width: "170px",
  //     left: "calc(-50%)"
  //   }
  // }))();

  const stepClasses = makeStyles(theme => ({
    stepRoot: {
      zIndex: 2,
      color: "#9caccd",
      "&.active": {
        color: "#006fd7"
      },
      transition: theme.transitions.create("color")
    }
  }))();

  // const connector = (
  //   <StepConnector
  //     classes={{
  //       active: connectorClasses.connectorActive,
  //       completed: connectorClasses.connectorCompleted,
  //       disabled: connectorClasses.connectorDisabled,
  //       line: connectorClasses.connectorLine,
  //       root: connectorClasses.connectorRoot
  //     }}
  //   />
  // );

  const activateStepIcon = step => {
    if (props.activeStep >= step) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <div className={classes.stepContainer}>
      <Stepper
        className={classes.stepper}
        activeStep={props.activeStep}
        horizontal
      >
        <Step className={classes.step}>
          <StepLabel
            StepIconProps={{
              icon: (
                <LensIcon
                  classes={{ root: stepClasses.stepRoot }}
                  className={activateStepIcon(0)}
                />
              )
            }}
          />
        </Step>
        <Step className={classes.step}>
          <StepLabel
            StepIconProps={{
              icon: (
                <LensIcon
                  classes={{ root: stepClasses.stepRoot }}
                  className={activateStepIcon(1)}
                />
              )
            }}
          />
        </Step>
        <Step className={classes.step}>
          <StepLabel
            StepIconProps={{
              icon: (
                <LensIcon
                  classes={{ root: stepClasses.stepRoot }}
                  className={activateStepIcon(2)}
                />
              )
            }}
          />
        </Step>
      </Stepper>
    </div>
  );
};

export default CustomStepper;
