import React, { Component } from "react";
import Total from "./Total.js";

class TotalContainer extends Component {
  getSum(total, num) {
    return total + num;
  }
  render() {
    let listTotal = this.props.list;
    const totalOrder = listTotal.reduce((a, b) => ({
      total: a.total + b.total
    }));
    return (
      <div>
        {this.props.list.map(list => (
          <Total
            key={list.title}
            item={list.title}
            amount={list.amount}
            total={list.total}
          />
        ))}
        {totalOrder.total ? (
          <p className='collection-item no-padding-left border-top text-bold'>
            Total: {totalOrder.total} KM
          </p>
        ) : null}
      </div>
    );
  }
}

export default TotalContainer;
