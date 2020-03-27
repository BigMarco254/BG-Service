import React from 'react';

const ItemInfoShipCost = (props)=>{
  var shipCost = (typeof props.shipCost == 'number' && props.shipCost > 0) ? `Cost: ${(props.shipCost.toFixed(2))}` : 'This item ships free';
  return (<div className='item-info-ship-cost'> { shipCost } </div>);
}

export default ItemInfoShipCost;