import React, { Component } from "react";
import Items from "./Items";

class ItemsContainer extends Component {
  state = {
    numberOfTables: [1]
  };
  addNewTable = () => {
    let prevState = this.state;
    let nextState = prevState.numberOfTables.push(
      prevState.numberOfTables.length + 1
    );
    console.log(prevState, this.state);
    this.setState({
      ...prevState
    });
  };
  removeTable = () => {
    let prevState = this.state;
    let nextState = prevState.numberOfTables.pop(
      prevState.numberOfTables.length
    );
    console.log(prevState, this.state);
    this.setState({
      ...prevState
    });
  };

  render() {
    const numberOfTables = this.state.numberOfTables;
    return (
      <ul className='collection'>
        <div className='container'>
          <button onClick={this.addNewTable}>+</button>
          <button onClick={this.removeTable}>-</button>
        </div>

        {numberOfTables.map(numberOfTables => {
          return (
            <li key={numberOfTables} className='collection-item'>
              <details key={numberOfTables}>
                <Items />
                <summary>Table {numberOfTables}</summary>
              </details>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ItemsContainer;
