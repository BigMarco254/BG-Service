import React from 'react';
import StarRating from './StarRating.jsx';

var ItemHeading = (props)=>(
  <div>
  <div className='item-heading d-inline-flex'>
    <span className='item-info-store-name mr-1' style={{fontSize: "16px", fontWeight: 300}}>{props.storeName}</span>
    <span className='mr-1' style={{
      color: "#e1e3df"
    }}>|</span>
    <span className='item-info-store-rating'><a href='#reviews'><StarRating rating={Number(props.storeRating)}/></a></span>
  </div>
  <h1 className='item-info-item-name' style={{fontSize: "26px", fontWeight: 300}}>{props.itemName}</h1>
    <div className='d-inline-block'>
    {props.badges.map((name, index) => {
      return (<span key={index} className="badge badge-pill badge-warning mr-1" style={{backgroundColor: "#FDEBD2", fontSize: "13px", fontWeight: "normal"}}>{name}</span>);
    })}
    </div>
  </div>
)

export default ItemHeading;