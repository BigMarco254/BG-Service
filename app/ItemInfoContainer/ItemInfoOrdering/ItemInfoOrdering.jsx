import React from 'react';

const ItemInfoOrdering = (props)=>{
  const insertDict = {
    niceChoice: 
                <React.Fragment>
                  <span className='nice-choice-insert-icon'></span>
                  <span className='item-info-insert-label'><strong>Nice choice! </strong></span>
                  <span className='item-info-insert-desc'>Enjoy free shipping to the US when you spend $35+ at this shop.</span>
                </React.Fragment>,
    othersWant: 
                <React.Fragment>
                  <span className='others-want-insert-icon'></span>
                  <span className='item-info-insert-label'><strong>Other people want this </strong></span>
                  <span className='item-info-insert-desc'>Over {Math.floor(Math.random()*50+10)} people have this in their carts right now.</span>
                </React.Fragment>
  }
  
  return (
  <div className='item-info-ordering'>
  <button className='add-to-cart'>Add To Cart button</button>
  {props.inserts.map((insert,index)=>(
    <div className='item-order-insert' key={`insert${index}`}>{insertDict[insert]}</div>
  ))}
  </div>
  )
};

export default ItemInfoOrdering;