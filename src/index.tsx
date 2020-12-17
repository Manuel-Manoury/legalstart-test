import React from "react";
import ReactDOM from "react-dom";

import "./style/main.css"; // this import is needed for the build to actually generate the CSS bundle + copy fonts

import { APP_DOM_CONTAINER } from "./config";

import Provider from "./providers";
import MainView from "./views/main";

ReactDOM.render(
  <Provider>
    <MainView />
  </Provider>,
  document.getElementById(APP_DOM_CONTAINER)
);
