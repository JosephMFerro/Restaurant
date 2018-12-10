import React from 'react';
import Item from './Item';

const ItemList = ({ id, items, }) => (
  <div>
    {
      items.map( item => 
        <Item
        key = {item.id} {...item}
        />
      )
    }
  </div>
)

export default ItemList;