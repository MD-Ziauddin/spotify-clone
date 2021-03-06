import React from "react";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      <img
        className="login__image"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <a className="login__button" href={loginUrl}>
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;
