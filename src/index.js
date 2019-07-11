import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import DepositBox from "./Containers/DepositBox/DepositBox";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <DepositBox />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
