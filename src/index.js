import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function TemporaryName() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDom.render(<TemporaryName />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
