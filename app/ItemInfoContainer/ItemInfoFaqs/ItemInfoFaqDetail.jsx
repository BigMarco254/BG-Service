import React from 'react';

class ItemInfoFaqDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state= {expanded:false};
  }
    render(){
      return (
      <div className='item-info-faq-detail'>
        <button className="item-info-faq-detail-button">
        <span className='item-info-faq-question'>{this.props.faq.question}</span>
        <span className='item-info-faq-arrow'></span>
        </button>
        <div className='item-info-faq-answer'>{this.props.faq.answer}</div>
      </div>
      )
    }
  } 

export default ItemInfoFaqDetail;