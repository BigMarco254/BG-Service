import React from 'react';

class ItemInfoPoliciesModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      policyModalOpen: false,
    }
  }
  render(){
    return (
      <button className='item-info-policies-modal-button'>View shop policies</button>
    )
  }
};

export default ItemInfoPoliciesModal;