import React, { Component } from 'react';

class Counter extends Component {
  getBadgeClasses() {
    let classes = 'badge p-2 mt-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';

    return classes;
  }

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>
            {this.props.counter.value === 0 ? 'Zero' : this.props.counter.value}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm px-3 mt-2"
          >
            +
          </button>
          <button
            className="btn btn-secondary btn-sm mx-3 px-3 mt-2"
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}
            onClick={() => this.props.onDecrement(this.props.counter)}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm px-3 mt-2"
          >
            x
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
