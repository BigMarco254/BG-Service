import React from 'react';

class ItemInfoShipInfo extends React.Component{
  constructor(props) {
    super(props);
  this.state = {
    expanderTitle: props.shipCost ? 'Deliver to' : 'Get Shipping Cost',
    expanded: false
  }
}
render(){
  return (
  // button triggers expansion/visibility of selector for country, field for zip
  <button className='item-info-ship-info'>{this.state.expanderTitle}</button> 
    )
  }
}

export default ItemInfoShipInfo;