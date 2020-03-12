import React from 'react';
import ItemInfoFaqDetail from './ItemInfoFaqDetail.jsx';

class ItemInfoFaqDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      faqDetails : [
        {faqid:0, question: 'Is this a question?', answer: "Yes it is"},
        {faqid:1, question: 'Was I a good boy?', answer: "No, I hear you were the best"},  
      ]
    }
  }
  
  render(){
    return (
      this.state.faqDetails.map((faq)=>(
        <ItemInfoFaqDetail faq={faq} key={`faqid-${faq.faqid}`}  />
      ))
    )
  }
}

export default ItemInfoFaqDetails;