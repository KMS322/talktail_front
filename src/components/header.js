import "../css/header.css";
import React, { useState } from "react";
const Header = ({ onPageChange }) => {
  const [current, setCurrent] = useState("home");
  return (
    <div className="header">
      <div className="logo_box">
        <img src="/img/logo.png" alt="" />
      </div>
      <div className="nav">
        <p
          style={{
            color: current === "home" ? "blue" : "black",
            fontWeight: current === "home" ? "600" : "",
          }}
          onClick={() => {
            onPageChange("home");
            setCurrent("home");
          }}
        >
          Home
        </p>
        <p
          style={{
            color: current === "about" ? "blue" : "black",
            fontWeight: current === "about" ? "600" : "",
          }}
          onClick={() => {
            onPageChange("about");
            setCurrent("about");
          }}
        >
          About
        </p>
        <p
          style={{
            color: current === "solution" ? "blue" : "black",
            fontWeight: current === "solution" ? "600" : "",
          }}
          onClick={() => {
            onPageChange("solution");
            setCurrent("solution");
          }}
        >
          Solution
        </p>
        <p
          style={{
            color: current === "contact" ? "blue" : "black",
            fontWeight: current === "contact" ? "600" : "",
          }}
          onClick={() => {
            onPageChange("contact");
            setCurrent("contact");
          }}
        >
          Contact us
        </p>
      </div>
    </div>
  );
};

export default Header;
