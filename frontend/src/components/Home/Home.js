import React, { useState } from "react";
import SignUp from "../Registration/SignUp";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";
import HomeStyles from "./HomeStyles";

const Home = props => {
  const classes = HomeStyles();

  let [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!localStorage.getItem("token")) {
    return (
      <div>
        <SignUp loading={loading} />
      </div>
    );
  }

  return (
    <div className={classes.homeContainer}>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
