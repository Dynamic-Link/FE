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

// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
const App = () => {
  const [user, setUser] = useState("")
  // const [clicked, setClicked] = useState(0);
  const baseURL = "https://dynamic-link.herokuapp.com"
  const theme = createMuiTheme(useTheme)
  const token = localStorage.getItem("token")
  useEffect(() => {
    axios
      .get(`${baseURL}/api/user`, {
        headers: { Authorization: `${token}` }
      })
      .then(res => {
        setUser(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    // <Header />
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <UserContext.Provider value={{ user, setUser, baseURL }}>
            <Route exact path="/" component={Dashboard} />
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
  )
}

export default App
