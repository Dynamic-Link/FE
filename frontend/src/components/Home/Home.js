import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import SignUp from "../Registration/SignUp";
import Dashboard from "../Dashboard/Dashboard";
import { UserContext } from "../../context/UserContext";

const Home = props => {
  let [loading, setLoading] = useState(false);
  let [token, setToken] = useState("");
  const { user, setUser } = useContext(UserContext);

  const baseURL = "http://localhost:8080";

  //Setting the token
  useEffect(() => {
    const storageToken = localStorage.getItem("token");
    const headers = { token: storageToken };
    setToken(storageToken);

    axios
      .get(`${baseURL}/api/account/getUser`, {
        headers
      })
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/signIn");
  };

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!token) {
    return (
      <div>
        <SignUp loading={loading} />
      </div>
    );
  }

  return (
    <div>
      <Dashboard baseURL={baseURL} token={token} />
      <button onClick={() => logout()}>Log out</button>
    </div>
  );
};

export default Home;
