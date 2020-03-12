import React from 'react';
import ItemInfoPolicyDetails from './ItemInfoPolicyDetails.jsx';
import ItemInfoPoliciesModal from './ItemInfoPoliciesModal.jsx';

const ItemInfoPolicies = (props)=>(
  <div className='item-info-policies'>
    <ItemInfoPolicyDetails />
    <ItemInfoPoliciesModal />
  </div>
);

export default ItemInfoPolicies;