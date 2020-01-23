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

const SignIn = props => {
  const classes = RegistrationStyles();
  const { baseURL } = useContext(UserContext);

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [signInError, setSignInError] = useState("");

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onSignIn = () => {
    axios
      .post(
        `${baseURL}/api/account/signin`,
        {
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
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          props.history.push("/");
        } else {
          setSignInError(res.data.message);
        }
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
          <p className={classes.topBarText}>Don't have an account?</p>
          <Link to="/signUp">
            <Button className={classes.topBarButton}>Sign Up</Button>
          </Link>
        </div>
      </div>
      <Container className={classes.container}>
        <div className={classes.circle}></div>
        <div className={classes.formContainer}>
          <Typography variant="h1" className={classes.formTitle}>
            Sign In
          </Typography>
          <Form className={classes.form}>
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
              <Button className={classes.formButton} onClick={() => onSignIn()}>
                Sign In
              </Button>
              {signInError ? <p>{signInError}</p> : null}
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
