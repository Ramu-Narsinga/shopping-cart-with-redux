import { ADD_TO_CART } from '../actions'
import { REMOVE_FROM_CART } from '../actions'

import bball from '../images/bball.jpeg'
import celticsjersey from '../images/celtics-jersey.jpg'
import macbook from '../images/macbook.jpg'

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

    default:
      return state
  }
}

export default addToCartReducer