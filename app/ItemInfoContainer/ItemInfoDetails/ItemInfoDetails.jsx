import React from 'react';
import ItemInfoQuickFacts from './ItemInfoQuickFacts.jsx';
import ItemInfoDescription from './ItemInfoDescription.jsx';

const ItemInfoDetails = (props)=>(
  <div className='item-info-details'>
  <ItemInfoQuickFacts />
  <ItemInfoDescription />
  </div>
);

export default ItemInfoDetails;