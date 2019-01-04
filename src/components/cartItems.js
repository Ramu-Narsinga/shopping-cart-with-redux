import React from 'react'
import ItemCard from './itemCard'

const closeMarkerCSS = {
    cursor: 'pointer'
}

const ItemsCart = ({ shoppingCartItems, onCartItemClick }) => (
    <div className="row">
        {(shoppingCartItems.length > 0) ?
            <ul>
                 <p>Shopping cart</p>
                {shoppingCartItems.map((item, index) =>
                    <div>
                        {(item) ?
                            <li key={index} > {(item) ? item.title : ""} {(item) ? <span style={closeMarkerCSS} onClick={() => onCartItemClick(item, index)}>X</span> : ""} </li>
                            : ""}
                    </div>
                )}
            </ul> : "Empty Cart"}
    </div>
)

export default ItemsCart;