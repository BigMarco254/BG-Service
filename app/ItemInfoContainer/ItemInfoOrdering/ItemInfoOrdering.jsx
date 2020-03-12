import React from 'react';

const ItemInfoOrdering = (props)=>{
  const inserts = ['insert1','insert2'];
  return (
  <div className='item-info-ordering'>
  <button className='add-to-cart'>Add To Cart button</button>
  {inserts.map((insert,index)=>(
    <div className='item-order-insert' key={`insert${index}`}>{insert}</div>
  ))}
  </div>
  )
};

export default ItemInfoOrdering;