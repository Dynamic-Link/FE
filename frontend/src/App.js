import React, { useState } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import SignIn from "./components/Registration/SignIn";
import SignUp from "./components/Registration/SignUp";
import { AddLinkForm } from "./components/AddLinkForm/AddLinkForm";

import { UserContext } from "./context/UserContext";

// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

const App = () => {
  const [user, setUser] = useState("");
  const [clicked, setClicked] = useState(0);

  return (
    // <Header />
    <Router>
      <Switch>
        <UserContext.Provider value={{ user, setUser, clicked, setClicked }}>
          <Route exact path="/" component={Home} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/addLink" component={AddLinkForm} />
        </UserContext.Provider>
      </Switch>
    </Router>
    // <Footer />
  );
};

export default App;
