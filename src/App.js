import React from "react";
import "./styles.css";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./logo.svg";

export default function App() {
  return (
    <div className="App">
      <ScrollToTop smooth component={<MySVG />} />
      <h1>Hello!</h1>
      <h2>Scroll down for the button to appear</h2>
      <p style={{ marginTop: "150vh" }}>bottom</p>
    </div>
  );
}
