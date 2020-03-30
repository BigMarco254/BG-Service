import React from 'react';
import ItemInfoShipCost from './ItemInfoShipCost.jsx';
import ItemInfoShipInfo from './ItemInfoShipInfo.jsx';

const ItemInfoShipping = (props)=>(
  <div className='item-info-shipping'>
  <div className="row">
    <div className="col-md-6">
      <span className='item-info-label' style={{color: "rgb(89, 89, 89)", display: "inline", fontSize: "13px", fontWeight: 300}}>Ready to ship in</span>
      <p className='item-info-ship-time' style={{color: "rgb(34, 34, 34)", fontSize: "26px", fontWeight: 300}}>{(props.shipTime !== null && props.shipTime !== "") ? props.shipTime : "3 weeks"}</p>
    </div>
    <div className="col-md-6">
      <span className='item-info-label' style={{color: "rgb(89, 89, 89)", display: "inline", fontSize: "13px", fontWeight: 300}}>From</span>
      <p className='item-info-ship-from' style={{color: "rgb(34, 34, 34)", fontSize: "26px", fontWeight: 300}}>{(props.shipFrom !== null && props.shipFrom !== "") ? props.shipFrom : "USA"}</p>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <span className='item-info-label' style={{color: "rgb(89, 89, 89)", display: "inline", fontSize: "13px", fontWeight: 300}}>Cost to ship</span>
      <p className='item-info-ship-time' style={{color: "rgb(34, 34, 34)", fontSize: "26px", fontWeight: 300}}>{(typeof props.shipCost == 'number' && props.shipCost > 0) ? `${(props.shipCost.toFixed(2))}` : 'Free'}</p>
    </div>
    <div className="col-offset-6">
    </div>
  </div>
    {/* Conditionals - Free shipping > button is 'Deliver to', else 'Get shipping cost' */}
    {/* <ItemInfoShipCost shipCost={props.shipCost}/> */}
    {/* button */}
    {/* <ItemInfoShipInfo shipCost={props.shipCost}/> */}
    {/* charge for shipping > conditional element to explain shipping upgrades */}
    {/* <div className='item-info-ship-upgrade'> Shipping upgrades available in the cart </div> */}
  </div>
);

export default ItemInfoShipping;