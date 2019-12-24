import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { Typography } from "@material-ui/core";

import RegistrationStyles from "./RegistrationStyles";

const SignUp = props => {
  const classes = RegistrationStyles();
  const { baseURL } = useContext(UserContext);

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [signUpError, setSignUpError] = useState("");

  const onChangeFirstName = e => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = e => {
    setLastName(e.target.value);
  };

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onSignUp = () => {
    // console.log(firstName, lastName, email, password);
    axios
      .post(
        `${baseURL}/api/account/signup`,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        props.history.push("/signIn");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className={classes.barContainer}>
        <div className={classes.logo}>
          <div className={classes.smallCircle}></div>
          <Typography variant="h1">SmartLinks</Typography>
        </div>
        <div className={classes.topBarTextContainer}>
          <p className={classes.topBarText}>Already have an account?</p>
          <Link to="/signIn">
            <Button className={classes.topBarButton}>Sign In</Button>
          </Link>
        </div>
      </div>
      <Container className={classes.container}>
        <div className={classes.circle}></div>
        <div className={classes.formContainer}>
          <Typography variant="h1" className={classes.formTitle}>
            Sign Up
          </Typography>
          <Form className={classes.form}>
            <Col>
              <FormGroup>
                <Label className={classes.label}>First Name</Label>
                <Input
                  className={classes.input}
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={onChangeFirstName}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className={classes.label}>Last Name</Label>
                <Input
                  className={classes.input}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={onChangeLastName}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className={classes.label}>Email</Label>
                <Input
                  className={classes.input}
                  type="email"
                  name="email"
                  placeholder="myemail@email.com"
                  value={email}
                  onChange={onChangeEmail}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className={classes.label}>Password</Label>
                <Input
                  className={classes.input}
                  type="password"
                  name="password"
                  placeholder="********"
                  value={password}
                  onChange={onChangePassword}
                />
              </FormGroup>
            </Col>
            <div className={classes.buttonDiv}>
              <Button className={classes.formButton} onClick={() => onSignUp()}>
                Sign Up
              </Button>
              {signUpError ? <p>{signUpError}</p> : null}
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
