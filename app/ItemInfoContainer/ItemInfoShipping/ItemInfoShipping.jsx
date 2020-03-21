import React from 'react';
import ItemInfoShipCost from './ItemInfoShipCost.jsx';
import ItemInfoShipInfo from './ItemInfoShipInfo.jsx';

const ItemInfoShipping = (props)=>(
  <div className='item-info-shipping'>
    <span className='item-info-ship-estimate'>
      <div className='item-info-label'>Ready to ship in</div>
      <div className='item-info-ship-time'>{props.shipTime}</div>
    </span>
    <span className='item-info-ship-loc'>
      <div className='item-info-label'>From</div>
      <div className='item-info-ship-from'>{props.shipFrom}</div>
    </span>
    {/* Conditionals - Free shipping > button is 'Deliver to', else 'Get shipping cost' */}
    <ItemInfoShipCost shipCost={props.shipCost}/>
    {/* button */}
    <ItemInfoShipInfo shipCost={props.shipCost}/>
    {/* charge for shipping > conditional element to explain shipping upgrades */}
    <div className='item-info-ship-upgrade'> Shipping upgrades available in the cart </div>
  </div>
);

export default ItemInfoShipping;