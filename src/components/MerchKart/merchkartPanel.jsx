import React, { Component } from "react";
import Invoice from "./invoice.jsx";
import Counters from "./counters";
import merch from "./merch.js";
import "./merchlist.css";
class MerchKartPanel extends Component {
  state = {
    counters: [],
    isBuying: false,
  };

  toggleBuying = () => {
    this.setState({ isBuying: !this.state.isBuying });
  };
  getIsBuying = () => {
    console.log(this.state.isBuying);
    if (this.state.isBuying) {
      return true;
    }
    return false;
  };

  handleIncrement = (c) => {
    var res = [...this.state.counters];
    res[c - 1].value = res[c - 1].value + 1;
    this.setState({ counters: res });
  };

  handleDecrement = (c) => {
    var res = [...this.state.counters];
    res[c - 1].value = res[c - 1].value > 0 ? res[c - 1].value - 1 : 0;
    this.setState({ counters: res });
  };

  handleReset = () => {
    this.setState({ counters: [] });
  };

  handleDelete = (counter) => {
    const counters = [...this.state.counters].filter((c) => counter !== c.id);
    this.setState({ counters });
  };

  handleAdd = (title, price, photo) => {
    var res = [...this.state.counters];
    res.push({
      id: res.length + 1,
      name: title,
      price: price,
      photo: photo,
      value: 1,
    });
    this.setState({ counters: res });
  };
  render() {
    if (!this.state.isBuying) {
      return (
        <div className="container tb1">
          <nav className="headMenu main_head sticky-top show navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="main_head navbar-brand lm-auto rm-auto" href="#">
              Merchandise Counter App
            </a>
          </nav>
          <br />
          <div className="scrollList container">
            <table className="table tb1">
              <tbody>
                <tr>
                  {merch.map((merchItem) => {
                    return (
                      <td key={merchItem.id}>
                        <div
                          className="card"
                          style={{ overflow: "hidden", borderRadius: "15px" }}
                          key={merchItem.id}
                        >
                          <img
                            className="imgList"
                            src={merchItem.photo}
                            alt={merchItem.title}
                            height="20px"
                            width="50px"
                          />
                          <div className="card-body">
                            <h6 className="card-title">
                              <b>{merchItem.title}</b>
                            </h6>
                            <h6>
                              <span className="badge badge-pill badge-success">
                                {merchItem.rating} ⭐
                              </span>
                              (
                              {Number(
                                merchItem.reviews.toFixed(1)
                              ).toLocaleString()}
                              )
                            </h6>
                            <h5 className="card-text">
                              ₹
                              {Number(
                                merchItem.price.toFixed(1)
                              ).toLocaleString()}
                            </h5>
                            <hr />
                            <button
                              className="btn btn-warning cart-btn"
                              onClick={(event) =>
                                this.handleAdd(
                                  merchItem.title,
                                  merchItem.price,
                                  merchItem.photo
                                )
                              }
                            >
                              ADD TO CART
                            </button>
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>

          <br />

          <Counters
            key={this.state.counters.id}
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            toggleBuying={this.toggleBuying}
            getIsBuying={this.getIsBuying}
          />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <Invoice />
        </React.Fragment>
      );
    }
  }
}

export default MerchKartPanel;
