import React from 'react';

const ItemInfoPolicyDetails = (props)=>{
  const policies = ['policy1', 'policy2'];
  return (
    <React.Fragment>
    {policies.map((policy,index)=>(
      <div key={`policy${index}`} className='item-info-policy-details'> {policy} </div>
      ))}
    </React.Fragment>
  );
}
  
export default ItemInfoPolicyDetails;