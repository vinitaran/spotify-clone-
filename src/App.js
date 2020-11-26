import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenUrl();
    window.location.hash = ""; //access token should not be visible in the url
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);

  return <div className="app">{token ? <h1>logged in</h1> : <Login />}</div>;
}

export default App;
