import React, {Component}  from 'react';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

const data = {
  columns: [
    ['data1', 30, 200, 100, 400, 150, 250],
    ['data2', 500, 20, 100, 10, 250, 250]
  ]
};

class Chart extends Component {
    render() {
      return (
          <div>
            <br/><br/><br/>
            <h1> I am chart</h1>
            <C3Chart data={data} />
          </div>
        
      );
    }
  
  }

  export default Chart