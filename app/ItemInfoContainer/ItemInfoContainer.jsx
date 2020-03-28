import React from 'react';
import axios from 'axios';
import ItemHeading from './ItemHeading/ItemHeading.jsx'
import ItemInfoPriceOptions from './ItemInfoPriceOptions/ItemInfoPriceOptions.jsx';
import ItemInfoOrdering from './ItemInfoOrdering/ItemInfoOrdering.jsx';
import ItemInfoDetails from './ItemInfoDetails/ItemInfoDetails.jsx';
import ItemInfoShipping from './ItemInfoShipping/ItemInfoShipping.jsx';
import ItemInfoPolicies from './ItemInfoPolicies/ItemInfoPolicies.jsx';
import ItemInfoFaqs from './ItemInfoFaqs/ItemInfoFaqs.jsx';
import ItemInfoMeetSeller from './ItemInfoMeetSeller/ItemInfoMeetSeller.jsx';

class ItemInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      item:{
      "itemId":"",
      "itemName":"",
      "categoryId":"",
      "categoryName":"",
      "storeName":"",
      "shopLogo":"",
      "shopTotalSales":"",
      "shopStartYear":"",
      "shopCountry":"",
      "storeOwnerName":"",
      "storePolicies":{
          "exchanges":true,
          "returns":true,
          "refunds":true,
          "paymentsAccepted":{
              "Credit/Debit":true,
              "Paypal":true,
              "Etsy Credit/Gift":true
          }
      },
      "storeFreeShippingTotal":0,
      "storeId":"",
      "storeRating":"",
      "imageArray":[],
      "relatedItemImage":"",
      "itemRating":"",
      "badges-bestseller":true,
      "badges-trending":true,
      "singlePrice":0,
      "pricedOptions":[],
      "unpricedOptions":[],
      "customOptions":[],
      "maxQuantity":"",
      "inserts-niceChoice":true,
      "inserts-othersWant":true,
      "quickFacts-handmade":true,
      "quickFacts-materials":"",
      "description":"",
      "shipTime":"",
      "shipFrom":"",
      "shipCost":0,
      "faqs":[{question: '', answer: ''}],
      "":""
      },
      loading:true,
    }
    this.quickFactsDefault = [
      {
        type: 'badge',
        label: 'handmade',
      },
      {
        type: 'detail',
        label: 'materials',
        text: 'materials'
      }
    ]
  }

  componentDidMount(){
    axios.get('http://etsy-poc-item-info.us-east-2.elasticbeanstalk.com/items/111')
    // axios.get('localhost:4321/items/111')
    .then(res=>{
      console.log(res.data);
      this.setState({item: res.data, loading:false});
    })
  }

  render() {
    if(this.state.loading){
      return (
        <div className='loading container'>
          Loading...
        </div>
      )
    } else{
        return (
          <div className='item-info container'>
          {/* <h1>Item Info Container</h1> */}
          <ItemHeading
            storeName={this.state.item.storeName || ''}
            storeRating={this.state.item.itemRating || ''}
            storeReviews={this.state.item.itemReviews || ''}
            itemName={this.state.item.itemName || ''}
            badges={this.state.item.badges || ['bestseller', 'trending']}
          />
          <ItemInfoPriceOptions 
            pricedOptions={this.state.item.pricedOptions || []}
            unpricedOptions={this.state.item.unpricedOptions || []}
            customOptions={this.state.item.customOptions || []}
            maxQuantity={this.state.item.maxQuantity || ''}
          />
          <ItemInfoOrdering
            inserts={this.state.item.inserts || ['niceChoice', 'othersWant']} />
          <ItemInfoDetails
            quickFacts={this.state.item.quickFacts || this.quickFactsDefault}
            description={this.state.item.description || ''}
            />
          <ItemInfoShipping
            shipTime={this.state.item.shipTime || ''}
            shipFrom={this.state.item.shipFrom || ''}
            shipCost={this.state.item.shipCost || ''}
          />
          <ItemInfoPolicies
            exchanges={this.state.item.storePolicies.exchanges || ''}
            returns={this.state.item.storePolicies.returns || ''}
            refunds={this.state.item.storePolicies.refunds || ''}
            paymentsAccepted={this.state.item.storePolicies.paymentsAccepted || ''}
            customPolicies={this.state.item.storePolicies.custom || ''}
            />
          <ItemInfoFaqs
            faqs={this.state.item.faqs || ''}
            />
          <ItemInfoMeetSeller
            storeOwnerName={this.state.item.storeOwnerName || ''}
            storeName={this.state.item.storeName || ''}            
          />
        </div>
      );
    }
  }
}

export default ItemInfoContainer;