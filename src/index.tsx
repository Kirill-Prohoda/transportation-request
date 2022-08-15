import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./pages/main/Main";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

import "antd/dist/antd.css";

import "leaflet/dist/leaflet.css";

import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
