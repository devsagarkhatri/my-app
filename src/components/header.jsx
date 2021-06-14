import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Header = () => {
  return (
    <div>
      <nav className="sticky-top headMenu show navbar navbar-expand-lg navbar-dark bg-dark ml mr">
        <Link className="navbar-brand ml-auto mr-auto" to="/">
          My React App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item m-2 ">
              <Link className="nav-link" to="/my-app/Movies">
                Home
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link className="nav-link" to="/my-app/Counter">
                Counter App
              </Link>
            </li>
            <li className="nav-item m-2">
              <Link className="nav-link" to="/my-app/Todo">
                Todo App
              </Link>
            </li>

            <li className="nav-item m-2">
              <Link className="nav-link" to="/my-app/Chart">
                Chart App
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
