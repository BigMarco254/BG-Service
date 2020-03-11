import React from 'react';
import SellerRating from './SellerRating.jsx';
import ItemTitle from './ItemTitle.jsx';
import ItemInfoBadges from './ItemInfoBadges.jsx';
import ItemInfoPrice from './ItemInfoPrice.jsx';

var ItemHeading = (props)=>(
  <div className='item-heading'>
    Item Heading
    <SellerRating />
    <ItemTitle />
    <ItemInfoBadges />
    <ItemInfoPrice />
  </div>
)

export default ItemHeading;