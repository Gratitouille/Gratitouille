import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null))
// <div>Hello World</div>
);

// ReactDOM.render(<App />, document.getElementById("root"));