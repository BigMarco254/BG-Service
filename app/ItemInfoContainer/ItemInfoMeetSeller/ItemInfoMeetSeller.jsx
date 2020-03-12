import React from 'react';

const ItemInfoMeetSeller = (props) => (
  <div className='item-info-meet-seller'>
    <p className='item-info-meet-seller-caption'>Meet your seller</p>
    <div className='item-info-seller-preview'>
      <span className='item-info-seller-preview-pic'></span>
      <span className='item-info-seller-preview-info'>
        <div className='item-info-seller-preview-name'>Seller Name</div>
        <div className='item-info-seller-preview-title'>Owner of <a href=''>Shop</a></div>
      </span>
    </div>
    <button className="item-info-message-seller">Message Owner</button>
    <p className='item-info-seller-response-time'>This seller usually reponds <strong>within 34 hours</strong></p>
  </div>
)

export default ItemInfoMeetSeller;