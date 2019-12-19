import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "./../../context/UserContext";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
// import "./App.css";

export const AddLinkForm = props => {
  const { user, setUser } = useContext(UserContext);
  const { clicked, setClicked } = useContext(UserContext);

  const baseURL = "http://localhost:3000";
  let [linkName, setLinkName] = useState("");
  let [product, setProduct] = useState("");
  let [promotions, setPromotions] = useState("");
  let [notes, setNotes] = useState("");
  let [defaultUrl, setDefaultUrl] = useState("");
  let [utmParameters, setUtmParameters] = useState("");
  let [linkError, setLinkError] = useState("");

  const onChangeLinkName = e => {
    setLinkName(e.target.value);
  };

  const onChangeProduct = e => {
    setProduct(e.target.value);
  };

  const onChangePromotions = e => {
    setPromotions(e.target.value);
  };

  const onChangeNotes = e => {
    setNotes(e.target.value);
  };

  const onChangeDefaultUrl = e => {
    setDefaultUrl(e.target.value);
  };

  const onChangeUtmParameters = e => {
    setUtmParameters(e.target.value);
  };

  const onSubmit = () => {
    setClicked(clicked + 1);
    axios
      .post(
        `${baseURL}/api/addLink`,
        {
          email: user.email,
          linkName,
          product,
          promotions,
          notes,
          defaultUrl,
          utmParameters
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        if (res.data.success == false) {
          setLinkError(res.data.message);
        } else {
          console.log(res.data);
          //push to new page (dashboard?)
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Add Link</h2>
      <Link to="/">Dashboard</Link>

      <input
        type="text"
        placeholder="Link Name"
        value={linkName}
        onChange={onChangeLinkName}
        required
      />
      <input
        type="text"
        placeholder="Product"
        value={product}
        onChange={onChangeProduct}
        required
      />
      <input
        type="text"
        placeholder="Promotions"
        value={promotions}
        onChange={onChangePromotions}
      />
      <input
        type="text"
        placeholder="Notes"
        value={notes}
        onChange={onChangeNotes}
      />
      <input
        type="text"
        placeholder="Default URL"
        value={defaultUrl}
        onChange={onChangeDefaultUrl}
      />
      <input
        type="text"
        placeholder="UTM Parameters"
        value={utmParameters}
        onChange={onChangeUtmParameters}
      />
      <button onClick={() => onSubmit()}>Add Link</button>
      {linkError ? <p>{linkError}</p> : null}
    </div>
  );
};
