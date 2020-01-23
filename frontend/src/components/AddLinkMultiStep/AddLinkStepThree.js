import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import StepThreeStyles from "./StepThreeStyles";
import { Link } from "react-router-dom";

const AddLinkStepThree = ({
  updateStep,
  linkInfo,
  subDestination,
  setSubDestination
}) => {
  const classes = StepThreeStyles();
  const { baseURL } = useContext(UserContext);

  const addLink = linkObj => {
    const token = localStorage.getItem("token");
    const {
      linkName,
      product,
      defaultUrl,
      utmParameters,
      promotions,
      notes
    } = linkObj;
    axios
      .post(
        `${baseURL}/api/links`,
        {
          linkName: linkName,
          product: product,
          promotions: promotions,
          notes: notes,
          defaultUrl: defaultUrl,
          utmParameters: utmParameters
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          }
        }
      )
      .then(res => {
        console.log(res);
        // props.history.push("/links");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.topBar}>
        <div className={classes.back} onClick={() => updateStep("subtract")}>
          <i style={{ height: " 0.9rem" }} class="fas fa-chevron-left"></i>
          <p className={classes.backText}>Back</p>
        </div>
        <Link to="/links" className={classes.next}>
          <button
            className={classes.createButton}
            onClick={() => {
              addLink(linkInfo);
            }}
          >
            Create Link
          </button>
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
