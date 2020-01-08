import React, { useState } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import SignIn from "./components/Registration/SignIn";
import SignUp from "./components/Registration/SignUp";
import Links from "./components/Links/Links";
import Products from "./components/Products/Products";
import { AddLinkForm } from "./components/AddLinkMultiStep/AddLinkForm";
import AddLinkMultiStep from "./components/AddLinkMultiStep/AddLinkMultiStep";

import { UserContext } from "./context/UserContext";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import useTheme from "./styles/theme";

// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

const App = () => {
  const [user, setUser] = useState("");
  const [clicked, setClicked] = useState(0);
  const baseURL = "https://dynamic-link-be.herokuapp.com";

  const theme = createMuiTheme(useTheme);

  return (
    // <Header />
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <UserContext.Provider
            value={{ user, setUser, clicked, setClicked, baseURL }}
          >
            <Route exact path="/" component={Home} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/addLink" component={AddLinkMultiStep} />
            <Route path="/links" component={Links} />
            <Route path="/products" component={Products} />
          </UserContext.Provider>
        </Switch>
      </ThemeProvider>
    </Router>
    // <Footer />
  );
};

export default App;
