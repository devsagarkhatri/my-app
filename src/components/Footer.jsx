import React, { Component } from "react";
import "../index.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <hr />
        <ul>
          <li className="menu foot">Home</li>
          <li className="menu foot">Body</li>
          <li className="menu foot">Footer</li>
          <li className="menu foot">About</li>
        </ul>
      </div>
    );
  }
}

export default Footer;
