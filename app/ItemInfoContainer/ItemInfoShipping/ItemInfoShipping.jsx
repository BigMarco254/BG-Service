import React from 'react';
import ItemInfoShipTime from './ItemInfoShipTime.jsx';
import ItemInfoShipFrom from './ItemInfoShipFrom.jsx';
import ItemInfoShipCost from './ItemInfoShipCost.jsx';
import ItemInfoShipInfo from './ItemInfoShipInfo.jsx';
import ItemInfoShipUpgrade from './ItemInfoShipUpgrade.jsx';

const ItemInfoShipping = (props)=>(
  <div className='item-info-shipping'>
    <ItemInfoShipTime />
    <ItemInfoShipFrom />
    {/* Conditionals - Free shipping > button is 'Deliver to', else 'Get shipping cost' */}
    <ItemInfoShipCost />
    {/* button */}
    <ItemInfoShipInfo />
    {/* charge for shipping > conditional element to explain shipping upgrades */}
    <ItemInfoShipUpgrade />
  </div>
);

export default ItemInfoShipping;