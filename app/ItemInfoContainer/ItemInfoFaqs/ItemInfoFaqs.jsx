import React from 'react';
import ItemInfoFaqsButton from './ItemInfoFaqsButton.jsx'
import ItemInfoFaqDetails from './ItemInfoFaqDetails.jsx';

class ItemInfoFaqs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      expanderTitle: 'FAQs',
      expanded: false
  }
}
render(){
  return (
    <div className='item-info-faqs'>
      <ItemInfoFaqsButton expanderTitle={this.state.expanderTitle}/>
      <ItemInfoFaqDetails />
    </div>
    )
  }
}

export default ItemInfoFaqs;