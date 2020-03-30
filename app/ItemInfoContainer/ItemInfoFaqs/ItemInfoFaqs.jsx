import React from 'react';

class ItemInfoFaqs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
  }
}
render(){
  return (
    <div className='item-info-faqs'>
      -- Future Bootstrap Accordion -- <br></br>
      <button className='item-info-faqs-button'>FAQs</button> 
      {/* <ItemInfoFaqDetails /> */}
      {this.props.faqs.map((faq, index)=>(
        // <ItemInfoFaqDetail faq={faq} key={`faqid-${faq.faqid}`}  />
        <div key={index} className='item-info-faq-detail'>
        <button className="item-info-faq-detail-button">
        <span className='item-info-faq-question'>{faq.question}</span>
        <span className='item-info-faq-arrow'></span>
        </button>
        <div className='item-info-faq-answer'>{faq.answer}</div>
      </div>
      ))}
    </div>
    )
  }
}

export default ItemInfoFaqs;