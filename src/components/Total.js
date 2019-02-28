import React from "react";

const Total = props => {
  return (
    <div>
      {props.amount ? (
        <p>
          {props.item}
          <span> x {props.amount}</span>
          <span> = {props.total} KM</span>
        </p>
      ) : null}
    </div>
  );
};

export default Total;
