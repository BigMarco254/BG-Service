import React from 'react';
import ItemInfoQuickFacts from './ItemInfoQuickFacts.jsx';
import ItemInfoDescription from './ItemInfoDescription.jsx';

const ItemInfoDetails = (props)=>(
  <div className='item-info-details'>
  {/* <ItemInfoQuickFacts quickFacts-handmade={props.quickFacts-handmade} quickFacts-materials={props.quickFacts-materials}/> */}
  <ItemInfoDescription description={props.description} />
  </div>
);

export default ItemInfoDetails;