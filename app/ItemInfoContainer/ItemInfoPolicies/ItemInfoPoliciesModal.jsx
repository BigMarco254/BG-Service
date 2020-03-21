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
      <div>
        <button className='item-info-policies-modal-button'>View shop policies</button>
        <div>
          --Future modal--
          {`Exchanges: ${this.props.exchanges}`}
          {`Returns: ${this.props.returns}`}
          {`Refunds: ${this.props.refunds}`}
          {`Payments: ${this.props.paymentsAccepted}`}
          {this.props.customPolicies.map((policy,index)=>(
            <div key={`policy${index}`} className='item-info-policy-details'>
              <div>{policy.heading}</div>
              <div>{policy.description}</div>
            </div>
            ))}
        </div>
      </div>
    )
  }
};

export default ItemInfoPoliciesModal;