import React from 'react';

const ItemInfoQuickFacts = (props)=>{
  const quickFacts=['quick fact 1','quick fact 2'];
  return (
    <div className='item-info-quick-facts'>
    {quickFacts.map((fact, index)=>(
      <div className='quick-fact' key={`quick-fact${index}`}>{fact}</div>
    ))}
    </div>
  )
};

export default ItemInfoQuickFacts;