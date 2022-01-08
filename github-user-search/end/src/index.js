import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// dev-ji2fd4ia.us.auth0.com
// bBTZ9hRx5b8r7YsB0ieIHjjaqXRXkStX

ReactDOM.render(
  <React.StrictMode>
    {/* Auth0 docs https://auth0.com/docs/libraries/auth0-react */}
    <Auth0Provider
      domain="dev-ji2fd4ia.us.auth0.com"
      clientId="bBTZ9hRx5b8r7YsB0ieIHjjaqXRXkStX"
      redirectUri={window.location.origin}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
