import React from 'react';

const ItemInfoQuickFacts = (props)=>{
  const quickFactsBadgesDict={
    handmade:
              <React.Fragment>
                <span className='item-info-handmade-icon'></span>
                <span className='item-info-badge-label'>Handmade</span>
              </React.Fragment>
  };

  const detailMaker = (label, text) =>
  (
    <React.Fragment>
      <span className='item-info-detail-label'>{label} </span>
      <span className='item-info-detail-text'>{text}</span>
    </React.Fragment>
  )


  return (
    <div className='item-info-quick-facts'>
    {/* {props.quickFacts.map((fact, index)=>(
      <div className='quick-fact' key={`quick-fact${index}`}>
        {(fact.type === 'badge') ? quickFactsBadgesDict[fact.label]
        : detailMaker(fact.label, fact.text)
         }
        </div>
    ))} */}
    </div>
  )
};

export default ItemInfoQuickFacts;