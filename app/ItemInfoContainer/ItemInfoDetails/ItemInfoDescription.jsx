import React from 'react';

class ItemInfoDescription extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      expanded:false,
    }
  }

  
  render(){return (
  <React.Fragment><div className='item-info-description'><p>{this.props.description}</p></div>
  <button className='learn-more'>Learn more about this item</button>
  </ React.Fragment>
  )}
}
export default ItemInfoDescription;