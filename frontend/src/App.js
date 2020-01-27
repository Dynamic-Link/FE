import React, { useState, useEffect } from "react"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Home from "./components/Home/Home"
import SignIn from "./components/Registration/SignIn"
import SignUp from "./components/Registration/SignUp"
import Links from "./components/Links/Links"
import Dashboard from "./components/Dashboard/Dashboard"
import Products from "./components/Products/Products"
import AddLinkMultiStep from "./components/AddLinkMultiStep/AddLinkMultiStep"
import axios from "axios"

import { UserContext } from "./context/UserContext"

import { ThemeProvider } from "@material-ui/styles"
import { createMuiTheme } from "@material-ui/core"
import useTheme from "./styles/theme"
import PrivateRoute from "./components/PrivateRoute/index"

const App = () => {
  const [user, setUser] = useState("")
  const baseURL = "https://dynamic-link.herokuapp.com"
  const theme = createMuiTheme(useTheme)

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <UserContext.Provider value={{ user, setUser, baseURL }}>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <PrivateRoute path="/addLink" component={AddLinkMultiStep} />
            <PrivateRoute path="/links" component={Links} />
            <PrivateRoute path="/products" component={Products} />
          </UserContext.Provider>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App
