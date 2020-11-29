import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi(); //instance of api

function App() {
  const [{ token }, dispatch] = useDataLayerValue(); //

  useEffect(() => {
    const hash = getTokenUrl();
    window.location.hash = ""; //access token should not be visible in the url
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      }); //gets the user account
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcMDyySe7mgeq").then((discover_weekly) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: discover_weekly,
        });
      });
    }
  });

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
