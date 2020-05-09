import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import Main from "./main";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Main />, document.getElementById("root"));
serviceWorker.unregister();
