// The basic code made by npx create-react-app

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



//New code for frequency player

import { StrictMode } from "react";
import ReactDOM from "react-dom";

// import Component from "./Component";
import Hook from "./Hook";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <Component /> */}
    <Hook />
  </StrictMode>,
  rootElement
);









