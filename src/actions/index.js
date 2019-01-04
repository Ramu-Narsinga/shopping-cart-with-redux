export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = item => ({
    type: 'ADD_TO_CART',
    item
})

export const removeFromCart = (item, index) => ({
    type: 'REMOVE_FROM_CART',
    index,
    item
})