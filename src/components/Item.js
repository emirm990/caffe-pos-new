import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "../styles/button.css";
import "../styles/item.css";

class Item extends Component {
  state = {
    open: false
  };
  onOpenModal = () => {
    this.setState({ open: true });
    window.location.hash = "details";
  };
  onCloseModal = () => {
    this.setState({ open: false });
    window.location.hash = "#";
  };
  hashChanged = () => {
    if (window.location.hash === "#details") {
      this.setState({ open: true });
    } else this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    window.onhashchange = this.hashChanged;
    return (
      <React.Fragment>
        <div className='card-container hoverable'>
          {this.props.amount ? (
            <button
              className='btn waves-effect waves-light red hoverable'
              onClick={this.props.decreaseAmount}
            >
              X
            </button>
          ) : null}
          <div className='card cursor-pointer'>
            <div className='card-image' onClick={this.props.increaseAmount}>
              <img src={this.props.src} alt={this.props.title} />
              <span className='card-title teal lighten-1'>
                {this.props.title}
              </span>
            </div>
            <div className='card-content' onClick={this.props.increaseAmount}>
              <p>{this.props.content}</p>
              <p>
                {this.props.price} KM{" "}
                {this.props.amount ? (
                  <span>
                    <span>x {this.props.amount}</span>
                    <span> Total: {this.props.total} KM </span>
                  </span>
                ) : null}
              </p>
            </div>
            <div
              onClick={this.onOpenModal}
              className='card-action cursor-pointer'
            >
              <a href='#details' className='details-link'>
                Details
              </a>
            </div>
          </div>
        </div>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          closeOnEsc
          closeOnOverlayClick
        >
          <div className='card'>
            <div className='card-image margin-top'>
              <img src={this.props.src} alt={this.props.title} />
              <span className='card-title teal lighten-1'>
                {this.props.title}
              </span>
            </div>
            <div className='card-content'>
              <p>{this.props.details}</p>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Item;
