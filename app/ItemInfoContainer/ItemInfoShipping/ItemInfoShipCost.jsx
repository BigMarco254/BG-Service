import React from 'react';

const ItemInfoShipCost = (props)=>    
    <div className='item-info-ship-cost'> {`Cost: ${(props.shipCost.toFixed(2))}` || 'This item ships free'} </div>
export default ItemInfoShipCost;