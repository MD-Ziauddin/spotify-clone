import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import Login from "./component/Login";
import { getTokenFromUrl } from "./spotify";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      // spotify.setAccessToken(_token);
      spotify.setAccessToken(_token);

      spotify
        .getMe()
        .then((user) => {
          console.log(user);
        })
        .catch((err) => console.log(err));
    }

    console.log("i have the token ", _token);
  }, []);

  return (
    <div className="app">{token ? <h1>I am logged in</h1> : <Login />}</div>
  );
}

export default App;
