import React from 'react';

class ItemInfoOptionDropdown extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      value: '',
    }
  }

  // on change > if there is a selected value in current state
    // subtract price from parent state priceAdder, and add lowAdd/highAdd
    // if no selected value, subtract lowprice from parent state lowAdd, and subtract high price from parent state highAdd, and add price to priceAdder

  render(){
    return(
      <div className='item-info-option-dropdown'>
        <label>
          {this.props.optionGroup.menuLabel} 
        <select value={this.state.value}>
          <option value="">Select an option</option>
          {this.props.optionGroup.options.map((itemOpt,index)=>(
              <option
                key={`option${index}`}
                value={`${itemOpt.value}`}>
                {itemOpt.optionLabel} {itemOpt.price || ''}
              </option>
            ))}
        </select>
        </label>
      </div>
    )
  }
}

export default ItemInfoOptionDropdown;