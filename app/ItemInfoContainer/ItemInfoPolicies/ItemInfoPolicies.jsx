import React from 'react';
import ItemInfoPoliciesModal from './ItemInfoPoliciesModal.jsx';

const ItemInfoPolicies = (props)=>(
  <div className='item-info-policies mt-3'>
      <div className='item-info-exchanges'>Exchanges {props.exchanges ? "" : 'not'} accepted</div>
      <div className='item-info-returns'>Returns {props.returns ? "" : 'not'} accepted</div>
      <div className='item-info-refunds'>Refunds {props.refunds ? "" : 'not'} issued</div>
      {(props.exchanges || props.returns || props.refunds) ? <div className='item-info-exceptions'>Exceptions may apply.</div> : ""}
    <ItemInfoPoliciesModal
      exchanges={props.exchanges}
      returns={props.returns}
      refunds={props.refunds}
      paymentsAccepted={props.paymentsAccepted}
      customPolicies={props.customPolicies || []}
    />
  </div>
);

export default ItemInfoPolicies;