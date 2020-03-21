import React from 'react';

var ItemHeading = (props)=>(
  <div className='item-heading'>
    <span className='item-info-store-name'>{props.storeName}</span>
    <span className='item-info-store-rating'><a href='#reviews'>{props.storeRating}({props.storeReviews})</a></span>
    <div className='item-info-item-name'>{props.itemName}</div>
    <div className='item-info-badges'>{props.badges}</div>
  </div>
)

export default ItemHeading;