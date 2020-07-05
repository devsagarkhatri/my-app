import React, {Component}  from 'react';

import C3Chart from 'react-c3js';
import 'c3/c3.css';
import '../index.css';

const data = {
  columns: [
    ['data1', 30, 250, 100, 400, 150, 250],
    ['data2', 30, 150, 100, 0, 250, 250]
  ]
};

class Header extends Component {
    render() {
      return (
          <div class='head'>

            <h1> My React App</h1>
            <ul>
              <li class='menu'>Home</li>
              <li class='menu'>Body</li>
              <li class='menu'>Footer</li>
              <li class='menu'>About</li>
            </ul>
            <hr/>
            <br/><br/>
          </div>
        
      );
    }
  
  }

  export default Header