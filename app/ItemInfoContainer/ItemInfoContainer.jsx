import React from 'react';
import ItemHeading from './ItemHeading/ItemHeading.jsx'

class ItemInfoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='item-info'>
            <h1>Item Info Container</h1>
            <ItemHeading />
            </div>
        );
    }

}

export default ItemInfoContainer;