import { ADD_TO_CART } from '../actions'
import { REMOVE_FROM_CART } from '../actions'

import bball from '../images/bball.jpeg'
import celticsjersey from '../images/celtics-jersey.jpg'
import macbook from '../images/macbook.jpg'

import { SEARCH_IN_ITEMS } from '../actions/index'

console.log("ADD_TO_CART in reducer function", ADD_TO_CART);

const imageArray = [celticsjersey, bball, macbook];

const shoppingItemsData = [
  {
    imgPath: imageArray[0],
    title: 'Celtics Jersey',
    size: 'M',
    price: '$15',
    count: 1
  }, {
    imgPath: imageArray[1],
    title: 'Basketball',
    size: 'L',
    price: '$12',
    count: 1
  }, {
    imgPath: imageArray[2],
    title: 'MacBook Pro',
    size: 'XL',
    price: '$2400',
    count: 1
  }
]

const initialState = {
  shoppingItemsData: shoppingItemsData,
  shoppingCartItems: []
}

function addToCartReducer(state = initialState, action) {
  console.log("addToCartReducer function got called its state and action are::NOT IN SWITCH", state, action);
  switch (action.type) {

    case ADD_TO_CART:
      console.log("addToCartReducer function got called its state and action are::case CHECK", state, action);
      return Object.assign({}, state, {
        shoppingCartItems: [
          ...state.shoppingCartItems,
          action.item
        ]
      })

    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART dispatched action in SWITCH CASE CHECK::", state, action)

      console.log("return object", Object.assign({}, state, {
        shoppingCartItems: state.shoppingCartItems.filter((index) => {
          if (index == action.index)
            console.log("index MATCHED", index)
        })
      }));

      return Object.assign({}, state, {
        shoppingCartItems: state.shoppingCartItems.filter((item, index) => {
          if (index !== action.index) {
            console.log("index MATCHED", index)
            return state.shoppingCartItems[index]
          }
        }
        )
      })

    case SEARCH_IN_ITEMS:
      console.log("SEARCH_IN_ITEMS CASE MATCH::state::", state, "::action", action);
      var updatedList = []
      updatedList = state.shoppingItemsData
      var indexArray = []

      if (action.searchVal.length == 0) {
        var allElements = shoppingItemsData;
      }

      // apply the filter logic and update the shopping cart items
      if (action.searchVal.length > 0) {
        // console.log("this.state.shoppingItemsData", this.state.shoppingItemsData);
        updatedList = updatedList.map((item, index) => {

          if (item.title.toLowerCase().search(action.searchVal.toLowerCase()) > -1) {
            console.log("updatedList array for filter, MATCH FOUND", item, "props if class shoppingitems, INDEX::", index);
            return item;
          } else {
            indexArray.push(index)
            return index;
          }

        })

        console.log("final updated list based on map function", updatedList, "indexArray", indexArray);

        //iterate over indexArray and splice updatedList array with index from indexArray
        for (var i = 0; i < indexArray.length; i++) {
          console.log("updatedList in for splicing", updatedList)

          //after splice reduce array number by one to avoid inconsistency
          if (indexArray[i] > 0 && i != 0) {
            indexArray[i] = indexArray[i] - 1;
          }

          updatedList.splice(indexArray[i], 1);

        }

        console.log("after splice updatedList::", updatedList);
      } else {
        updatedList = allElements
        console.log("in-else, updatedList", updatedList)
      }

      return Object.assign({}, state, { shoppingItemsData: updatedList })

    default:
      return state
  }
}

export default addToCartReducer