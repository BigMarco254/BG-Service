import React from 'react';
import ItemInfoSellerName from './ItemInfoSellerName.jsx';
import ItemInfoRating from './ItemInfoRating.jsx';

const SellerRating = (props) => (
  <div className='seller-rating'>
  <ItemInfoSellerName />
  <ItemInfoRating />
  </div>
);

export default SellerRating;