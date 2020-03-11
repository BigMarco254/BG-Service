import React from 'react';

const ItemInfoPrice = (props)=>(
  <React.Fragment>
  <div className='item-info-price'> <span> Price </span><span className='item-info-price'>strikethrough price</span></div>
  <div className='you-save-line'>Save x$</div>
  </React.Fragment>
);

export default ItemInfoPrice;