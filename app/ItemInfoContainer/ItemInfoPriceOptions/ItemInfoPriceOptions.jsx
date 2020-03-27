import React from 'react';
import ItemInfoOptionDropdown from './ItemInfoOptionDropdown.jsx';

class ItemInfoPriceOptions extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      priceString: '', // priceAdder, with plus sign if lowAdd/highAdd populated
      lowAdd: 0,
      highAdd: 0,
      priceAdder: 0,
    };
    // this.handleDropdownPrice = handleDropdownPrice.bind(this);
  }
  
  handleDropdownPrice(selectedPrice, lowPrice, highPrice){
    // this.setState()
    // if no option selected, add low price to state.lowAdd and high price to state.highAdd
    // if option is selected, add price to state.priceAdder
  }
  

  render(){return (
    <div className='item-info-price-options'>

      {/* price */}
      <div className='item-info-price'>{this.state.priceString}</div>    
      {/* price options */}
      <div>
        {/* {console.log(this.props)} */}
        {this.props.pricedOptions.map((optionGroup, index)=>
          <ItemInfoOptionDropdown 
            key={`optionGroup${index}`}
            optionGroup={optionGroup}
            // onChange={this.handleDropdownPrice}
            />
          )}
      </div>
      {/* no cost options */}
      <div>
        {this.props.unpricedOptions.map((optionGroup, index)=>
          <ItemInfoOptionDropdown 
          key={`optionGroup${index}`}
          optionGroup={optionGroup}
          // onChange={this.handleDropdownPrice}
          />
          )}
      </div>
      {/* custom options */}
      <div>
        <label>
          {this.props.customOptions.label}
          <div>
            {this.props.customOptions.note}
          </div>
          <textarea cols={40} rows={1} placeholder={this.props.customOptions.default} />
        </label>
      </div>

      {/* quantity */}
      <div>
        Quantity
        <select className='item-info-quantity'>
            {[1,2,3,4,5,6,7,8,9,10].map(val=>
              <option key={val}>{val}</option>
              )}

        </select>
      </div>
    </div>
  )}
};

export default ItemInfoPriceOptions;