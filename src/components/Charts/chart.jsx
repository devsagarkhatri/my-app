import React, { Component } from "react";
import C3Chart from "react-c3js";
import "c3/c3.css";
import "./chart.css";
// import { event } from "jquery";



// const data = {
//   columns: [
//     ["data1", 30, 200, 100, 400, 150, 250],
//     ["data2", 500, 20, 100, 10, 250, 250],
//   ],
// };


class Chart extends Component {
  state={
    columns: [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 500, 20, 100, 10, 250, 250],
    ],
    types:{
      data1: 'area-spline',
      data2: 'area-spline'
    }
  };

  handleSlide(event,val){
    var data=[...this.state.columns];
    console.log(event,"<==val===>",val);
    
    switch (event) {
      case 11:
        data[0][2]=val;
        this.setState({columns:data});    
        break;

      case 12:
        data[0][3]=val;
        this.setState({columns:data});    
        break;
      case 13:
          data[0][4]=val;
          this.setState({columns:data});    
          break;
      case 14:
        data[0][5]=val;
        this.setState({columns:data});    
        break;
      
      case 21:
        data[1][2]=val;
        this.setState({columns:data});    
        break;

      case 22:
        data[1][3]=val;
        this.setState({columns:data});    
        break;
      case 23:
          data[1][4]=val;
          this.setState({columns:data});    
          break;
      case 24:
        data[1][5]=val;
        this.setState({columns:data});    
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <nav className="headMenu main_head sticky-top show navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="main_head navbar-brand lm-auto rm-auto" href="#">
            Play With Charts
          </a>
        </nav>
        <br/><br/><br/>
        <C3Chart data={this.state}/>
        <br/><br/>
        <table border="0" className="chartTable">
          <thead>
            <tr className="chartRow">
              <th className="chartTh">
                Data 1
              </th>
              <th className="chartTh">
                Data 2
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="chartRow">
              <td className="chartTd">
                Point 1 :<br/>
                <div className="slidecontainer">
                  <input type="range" min="1" max="500"  className="slider" id="myRange11"                     
                    onChange={(event)=> this.handleSlide(11,event.target.value)}
                    defaultValue={this.state.columns[0][2]}
                    />
                </div>
              </td>
              <td className="chartTd">
                Point 1 :<br/>
                <div className="slidecontainer">
                  <input type="range" min="1" max="500"  className="slider" id="myRange21" 
                    onChange={(event)=>  this.handleSlide(21,event.target.value)}
                    defaultValue={this.state.columns[1][2]}
                  />
                </div>
              </td>
            </tr>
            <tr className="chartRow">
              <td className="chartTd">
                Point 2 :<br/>
                <div className="slidecontainer">
                  <input type="range" min="1" max="500"  className="slider" id="myRange12" 
                    onChange={ (event)=>  this.handleSlide(12,event.target.value)} 
                    defaultValue={this.state.columns[0][3]}
                  />
                </div>
              </td>                
              <td className="chartTd">
                Point 2 :<br/>
                <div className="slidecontainer">
                  <input type="range" min="1" max="500"  className="slider" id="myRange22" 
                    onChange={ (event)=> this.handleSlide(22,event.target.value)} 
                    defaultValue={this.state.columns[1][3]}
                  />
                </div>
              </td>
            </tr>
            <tr className="chartRow">
              <td className="chartTd">
                Point 3 :<br/>
                <div className="slidecontainer">
                  <input type="range" min="1" max="500"  className="slider" id="myRange13" 
                    onChange={ (event)=> this.handleSlide(13,event.target.value)} 
                    defaultValue={this.state.columns[0][4]}
                  />
                </div>
              </td>
              <td className="chartTd">
                Point 3 :<br/>
                <div className="slidecontainer">
                  <input type="range" min="1" max="500"  className="slider" id="myRange23" 
                    onChange={ (event)=> this.handleSlide(23,event.target.value)} 
                    defaultValue={this.state.columns[1][4]}
                  />
                </div>
              </td>
            </tr>
            <tr className="chartRow">
              <td className="chartTd">
                Point 4 :<br/>
                <div className="slidecontainer">
                  <input type="range" min="1" max="500"  className="slider" id="myRange14" 
                  onChange={ (event)=> this.handleSlide(14,event.target.value)} 
                  defaultValue={this.state.columns[0][5]}  
                />
                </div>
              </td>
              <td className="chartTd">
                Point 4 :<br/>
                <div className="slidecontainer">
                  <input type="range" min="1" max="500"  className="slider" id="myRange24" 
                  onChange={ (event)=> this.handleSlide(24,event.target.value)} 
                  defaultValue={this.state.columns[1][5]}  
                />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Chart;
