import React, { Component } from "react";
import MerchKart from "./merchcart";
class Counters extends Component {
  state = {
    isBuying: false,
  };
  getTotal = () => {
    var total = 0;
    for (let i = 0; i < this.props.counters.length; i++) {
      total =
        total + this.props.counters[i].value * this.props.counters[i].price;
    }
    console.log(Number(total.toFixed(1)).toLocaleString());
    return Number(total.toFixed(1)).toLocaleString();
  };
  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      toggleBuying,
      getIsBuying,
    } = this.props;
    if (!this.state.isBuying) {
      return (
        <div className="container lm-auto rm-auto">
          {this.props.counters.length > 0 ? (
            <button onClick={onReset} className="btn btn-dark btn-sm m-2">
              Empty your Cart
            </button>
          ) : (
            ""
          )}
          Total {"   "}
          <span className="badeg badge-pill badge-secondary">
            {this.props.counters.filter((c) => c.value > 0).length}
          </span>
          {"   "} Items In Basket
          <table className="table">
            <tbody>
              {this.props.counters.map((counter, key1) => (
                <MerchKart
                  onDelete={onDelete}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  key={key1}
                  counter={counter}
                  toggleBuying={toggleBuying}
                  getIsBuying={getIsBuying}
                ></MerchKart>
              ))}
            </tbody>
            {this.props.counters.length > 0 ? (
              <React.Fragment>
                <tfoot>
                  <tr>
                    <td colSpan="3">Total Amount Payable</td>
                    <td colSpan="2">₹{this.getTotal() + "/- only"}</td>
                    <td>
                      <button className="btn btn-primary btn-sm m-3">
                        Pay
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </React.Fragment>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </table>
        </div>
      );
    } else {
      return (
        <div>
          hello<div>brothers</div>
        </div>
      );
    }
  }
}

export default Counters;
