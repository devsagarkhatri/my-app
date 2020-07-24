import React from "react";
import "../index.css";

const Header = (props) => {
  return (
    <div className="head">
      <h1> My React App</h1>
      <ul>
        <li className="menu">Home</li>
        <li className="menu">Body</li>
        <li className="menu">Footer</li>
        <li className="menu">About</li>
      </ul>
      <hr />
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Navbar{" "}
          <span className="badeg badge-pill badge-secondary">
            {props.totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

export default Header;
