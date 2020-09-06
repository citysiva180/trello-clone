import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { createGlobalStyle } from "styled-components";
import $ from "jquery";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = Store();

const GlobalStyle = createGlobalStyle`
  html {
    background: #cc2b5e; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #cc2b5e, #753a88); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #cc2b5e, #753a88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    box-sizing: border-box;
    transition: all 0.5s ease-in;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

$(document).bind("DOMNodeRemoved", function (e) {
  console.log("Removed: " + e.target.nodeName);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
