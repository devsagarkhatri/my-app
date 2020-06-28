import React, {Component}  from 'react';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

const data = {
  columns: [
    ['data1', 30, 200, 100, 400, 150, 250],
    ['data2', 50, 20, 10, 40, 15, 25]
  ]
};

class Chart extends Component {
    render() {
      return (
          <div>
            <h1> iam chart</h1>
            <C3Chart data={data} />
          </div>
        
      );
    }
  
  }

  export default Chart