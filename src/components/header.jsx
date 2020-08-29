import React from "react";
import "../index.css";

const Header = (props) => {
  return (
    <div>
      <nav className="sticky-top headMenu show navbar navbar-expand-lg navbar-dark bg-dark ml mr">
        <a className="navbar-brand ml-auto mr-auto" href="#">
          My React App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item m-2 ">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#">
                Body
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="nav-link" href="#">
                About
              </a>
            </li>

            <li className="nav-item m-2">
              <a className="nav-link" href="#">
                Footer
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
