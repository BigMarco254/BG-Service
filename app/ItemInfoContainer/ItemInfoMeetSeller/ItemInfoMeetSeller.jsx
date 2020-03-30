import React from 'react';

const ItemInfoMeetSeller = (props) => (
  <div className='item-info-meet-seller'>
    <p className='item-info-meet-seller-caption' style={{color: "rgb(89, 89, 89)", fontSize: "13px", fontWeight: 300}}>Meet your seller</p>
    <div className='item-info-seller-preview d-flex'>
      <div className='item-info-seller-preview-pic'>pic</div>
      <div className='item-info-seller-preview-info'>
        <p className='item-info-seller-preview-name' style={{color: "rgb(34, 34, 34)", fontSize: "16px", fontWeight: 300}}>{props.storeOwnerName}</p>
        <p className='item-info-seller-preview-title' style={{color: "rgb(89, 89, 89)", fontSize: "13px", fontWeight: 300}}>Owner of <a href=''>{props.storeName}</a></p>
      </div>
    </div>
    <button className="item-info-message-seller btn btn-outline-dark btn-block" style={{borderRadius: "24px"}}>Message {props.storeOwnerName}</button>
    <p className='item-info-seller-response-time'>This seller usually reponds <strong>within 24 hours</strong></p>
  </div>
)

export default ItemInfoMeetSeller;