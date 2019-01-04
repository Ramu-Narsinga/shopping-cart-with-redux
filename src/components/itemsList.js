import React from 'react'
import ItemCard from './itemCard'

const ItemsList = ({shoppingItemsData, onItemClick}) => (
    <div className="row">
        {shoppingItemsData.map((item, index) =>
          <ItemCard key={index} {...item} onClick={() => onItemClick(item)}/>
        )}
    </div>
)

export default ItemsList;