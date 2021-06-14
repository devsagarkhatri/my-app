import React, { Component } from "react";
import "./merchkart.css";
class MerchKart extends Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>
            <img
              src={this.props.counter.photo}
              className="thumbimg"
              alt={this.props.counter.id}
            />
          </td>
          <td colSpan="2">{this.props.counter.name}</td>
          <td>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => this.props.onIncrement(this.props.counter.id)}
                className="btn btn-secondary"
              >
                {" "}
                +
              </button>

              <span className={this.getBadgeClasses()}>
                {this.formatCount()}
              </span>

              <button
                onClick={() => this.props.onDecrement(this.props.counter.id)}
                className="btn btn-secondary"
              >
                -
              </button>
            </div>
          </td>
          <td>
            ₹
            {Number(
              (this.props.counter.value * this.props.counter.price).toFixed(1)
            ).toLocaleString()}
          </td>
          <td>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm m-3"
            >
              Delete
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.props.counter.tags.length === 0) return this.formatCount();
    return (
      <ul>
        {this.props.counter.tags.map((tag) => (
          <li key={tag}></li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge p-3 badge-secondary";
    // classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}
export default MerchKart;
