import React from 'react';
import ItemHeading from './ItemHeading/ItemHeading.jsx'
import ItemInfoOptions from './ItemOptions/ItemInfoOptions.jsx';
import ItemInfoOrdering from './ItemInfoOrdering/ItemInfoOrdering.jsx';
import ItemInfoDetails from './ItemInfoDetails/ItemInfoDetails.jsx';
import ItemInfoShipping from './ItemInfoShipping/ItemInfoShipping.jsx';
import ItemInfoPolicies from './ItemInfoPolicies/ItemInfoPolicies.jsx';
import ItemInfoFaqs from './ItemInfoFaqs/ItemInfoFaqs.jsx';
import ItemInfoMeetSeller from './ItemInfoMeetSeller/ItemInfoMeetSeller.jsx';

class ItemInfoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='item-info'>
            <h1>Item Info Container</h1>
            <ItemHeading />
            <ItemInfoOptions />
            <ItemInfoOrdering />
            <ItemInfoDetails />
            <ItemInfoShipping />
            <ItemInfoPolicies />
            <ItemInfoFaqs />
            <ItemInfoMeetSeller />
            </div>
        );
    }

}

export default ItemInfoContainer;