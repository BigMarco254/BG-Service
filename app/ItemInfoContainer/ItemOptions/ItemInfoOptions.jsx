import React from 'react';

const ItemInfoOptions = (props)=>{
  const itemOptions = [1,2,3];
  return (
    <label>
     Select option: 
    <select>
      {itemOptions.map((itemOpt,index)=>(<option key={`option${index}`} value={`${itemOpt}`}>{itemOpt}</option>))}
    </select>
    </label>
  )
};

export default ItemInfoOptions;