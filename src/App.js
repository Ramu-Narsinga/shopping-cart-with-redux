import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ItemsList from './components/itemsList'
import bball from './images/bball.jpeg'
import celticsjersey from './images/celtics-jersey.jpg'
import macbook from './images/macbook.jpg'

import ItemsCartList from './containers/itemsCartList'
import ItemsCartElement from './containers/itemsCartElement'

import ControlledPopup from './components/cartItems'

import SearchBarElement from './containers/searchBarElement'

const imageArray = [celticsjersey, bball, macbook];

const shoppingItemsData = [
  {
    imgPath: 'celticsjersey',
    title: 'Celtics Jersey',
    size: 'M',
    price: '$15',
    count: 1
  }, {
    imgPath: 'bball',
    title: 'Basketball',
    size: 'L',
    price: '$12',
    count: 1
  }, {
    imgPath: 'macbook',
    title: 'MacBook Pro',
    size: 'XL',
    price: '$2400',
    count: 1
  }
]



class App extends Component {
  render() {
    for (var i = 0; i < shoppingItemsData.length; i++) {
      console.log("image array", imageArray[i]);
      shoppingItemsData[i].imgPath = imageArray[i];
    }
    return (
      <div className="container">
        {/* <ItemsList shoppingItemsData={shoppingItemsData} /> */}
        <SearchBarElement />
        <ItemsCartList />
        <ItemsCartElement />
      </div>
    );
  }
}

export default App;
