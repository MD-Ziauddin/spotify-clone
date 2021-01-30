import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import Login from "./component/Login";
import Player from "./component/Player";
import { getTokenFromUrl } from "./spotify";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      // spotify.setAccessToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
      });
      console.log("i have the token ", _token);
    }
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
