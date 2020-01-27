import React, { Component } from "react"
import { Redirect, Route } from "react-router-dom"
import axios from "axios"

axios.interceptors.request.use(
  function(options) {
    options.headers.authorization = `${localStorage.getItem("token")}`
    return options
  },
  function(error) {
    return Promise.reject(error)
  }
)

function PrivateRoute(props) {
  const { component: Component, ...rest } = props
  return (
    <Route
      {...rest}
      render={props => {
        const token = localStorage.getItem("token")
        return token ? <Component {...props} /> : <Redirect to="/signUp" />
      }}
    />
  )
}

export default PrivateRoute
