import React, { Component } from "react";
import Item from "./Item";
import Total from "./Total";
import "./items.css";

class Items extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }
  state = {
    items: [
      {
        id: 0,
        src: "./img/coffe.jpg",
        title: "Coffe",
        content: "Hot Coffe",
        type: "Hot Drinks",
        price: 1.5,
        amount: 0,
        total: 0
      },
      {
        id: 1,
        src: "./img/tea.jpg",
        title: "Tea",
        content: "Cup of Tea",
        type: "Hot Drinks",
        price: 2,
        amount: 0,
        total: 0
      },
      {
        id: 2,
        src: "./img/beer.jpg",
        title: "Beer",
        type: "Cold Drinks",
        content: "Cold Beer",
        price: 3,
        amount: 0,
        total: 0
      }
    ],
    searchResults: []
  };
  increaseAmount = param => e => {
    let newAmount = { ...this.state };
    newAmount.items[param.id].amount += 1;
    newAmount.items[param.id].total =
      newAmount.items[param.id].amount * newAmount.items[param.id].price;
    console.log(newAmount);
    this.setState({
      ...newAmount
    });
  };
  decreaseAmount = param => e => {
    let newAmount = { ...this.state };
    if (newAmount.items[param.id].amount > 0) {
      newAmount.items[param.id].amount -= 1;
      newAmount.items[param.id].total =
        newAmount.items[param.id].amount * newAmount.items[param.id].price;
      console.log(newAmount);
      this.setState({
        ...newAmount
      });
    }
  };
  getSum(total, num) {
    return total + num;
  }
  search(event) {
    let searchStr = event.target.value;
    const regexp = new RegExp(searchStr, "i");
    let searchResults = this.state.items.filter(
      search => regexp.test(search.type) || regexp.test(search.title)
    );

    this.setState({
      searchResults: searchResults
    });
  }
  render() {
    let list = this.state.items;
    {
      this.state.searchResults.length
        ? (list = this.state.searchResults)
        : (list = this.state.items);
    }
    const totalOrder = list.reduce((a, b) => ({ total: a.total + b.total }));
    return (
      <div className='row'>
        <div className='input-field container'>
          <input id='search' type='text' onChange={this.search} />
          <label htmlFor='search'>search</label>
        </div>

        <ul className='collection col s8 m8 l9 xl10'>
          {list.map(list => (
            <li className='collection-item col s12 m6 l3 xl3' key={list.id}>
              <Item
                handleClick={this.increaseAmount(list)}
                decreaseAmount={this.decreaseAmount(list)}
                id={list.id}
                src={list.src}
                title={list.title}
                content={list.content}
                price={list.price}
                amount={list.amount}
                total={list.total}
              />
            </li>
          ))}
        </ul>
        <div className='total collection col s4 m4 l3 xl2'>
          <p className='collection-item no-padding-left text-bold'>Order: </p>
          {list.map(list => (
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
      </div>
    );
  }
}

export default Items;
