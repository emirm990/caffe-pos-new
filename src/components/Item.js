import React from "react";
import "./button.css";

const Item = props => {
  return (
    <div className='card-container hoverable'>
      {props.amount ? (
        <button
          className='btn waves-effect waves-light red hoverable'
          onClick={props.decreaseAmount}
        >
          X
        </button>
      ) : null}
      <div className='card' onClick={props.handleClick}>
        <div className='card-image'>
          <img src={props.src} alt={props.title} />
          <span className='card-title'>{props.title}</span>
        </div>
        <div className='card-content'>
          <p>{props.content}</p>
          <p>
            {props.price} KM{" "}
            {props.amount ? (
              <span>
                <span>x {props.amount}</span>
                <span> Total: {props.total} KM </span>
              </span>
            ) : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
