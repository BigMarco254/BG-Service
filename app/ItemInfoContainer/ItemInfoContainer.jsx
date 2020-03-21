import React from 'react';
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
      item: {
        "_id": 111,
        "itemName": "Database Tester",
        "categoryId": 101,
        "categoryName": "Electronics",
        "storeName": "Techopalypse",
        "storeOwnerName": "Tester123",
        "storePolicies": {
          "exchanges": true,
          "returns": true,
          "refunds": true,
          "paymentsAccepted": {
            "Credit/Debit": true,
            "Paypal": true,
            "Etsy Credit/Gift": true
          },
          "custom": [
            {
              "heading": "custom policy 1",
              "description": "this is a custom policy"
            }
          ]
        },
        "storeFreeShippingTotal": "$35.00",
        "storeId": 101,
        "imageArray": "",
        "": "",
        "badges-bestseller": "TRUE",
        "badges-trending": "TRUE",
        "singlePrice": "",
        "pricedOptions": [
          {
            "menuLabel": "Size & Color",
            "options": [
              {
                "value": 0,
                "optionLabel": "white one size",
                "price": 23.9
              },
              {
                "value": 1,
                "optionLabel": "black one size",
                "price": 23.9
              },
              {
                "value": 2,
                "optionLabel": "white plus size",
                "price": 26.9
              },
              {
                "value": 3,
                "optionLabel": "black plus size",
                "price": 26.9
              }
            ]
          },
          {
            "menuLabel": "Customization?",
            "options": [
              {
                "value": 0,
                "optionLabel": "No thank you!",
                "price": 0
              },
              {
                "value": 1,
                "optionLabel": "Black Floral Initial",
                "price": 6
              },
              {
                "value": 2,
                "optionLabel": "Gold Floral Initial",
                "price": 6
              }
            ]
          }
        ],
        "unpricedOptions": [
          {
            "menuLabel": "Color",
            "options": [
              {
                "value": 0,
                "optionLabel": "Black"
              },
              {
                "value": 1,
                "optionLabel": "Gold"
              }
            ]
          },
          {
            "menuLabel": "Size",
            "options": [
              {
                "value": 0,
                "optionLabel": "Regular"
              },
              {
                "value": 1,
                "optionLabel": "Large"
              }
            ]
          }
        ],
        "customOptions": {
          "type": "field",
          "label": "Add your personalization (optional)",
          "note": "For customized robes please list one letter initial & Name or Title per each robe. Thank you!",
          "default": "Enter your input here"
        },
        "maxQuantity": 101,
        "inserts-niceChoice": "TRUE",
        "inserts-othersWant": "TRUE",
        "quickFacts-handmade": "TRUE",
        "quickFacts-materials": "satin, lace",
        "description": "This is a tool for testing database exports and imports",
        "shipTime": "instant delivery",
        "shipFrom": "online",
        "shipCost": 0,
        "faqs": [
          {
            "question": "Is this a FAQ question property?",
            "answer": "Yes, it is"
          },
          {
            "question": "Will this fit Shrek?",
            "answer": "Yes, one size fits all includes ogres."
          }
        ]
      }
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

  render() {
    return (
      <div className='item-info'>
        {/* <h1>Item Info Container</h1> */}
        <ItemHeading
          storeName={this.state.item.storeName}
          storeRating={this.state.item.itemRating || 5}
          storeReviews={this.state.item.itemReviews || 100}
          itemName={this.state.item.itemName}
          badges={this.state.item.badges || ['bestseller', 'trending']}
        />
        <ItemInfoPriceOptions 
          pricedOptions={this.state.item.pricedOptions || []}
          unpricedOptions={this.state.item.unpricedOptions || []}
          customOptions={this.state.item.customOptions || []}
          maxQuantity={this.state.item.maxQuantity}
        />
        <ItemInfoOrdering
          inserts={this.state.item.inserts || ['niceChoice', 'othersWant']} />
        <ItemInfoDetails
          quickFacts={this.state.item.quickFacts || this.quickFactsDefault}
          description={this.state.item.description}
        />
        <ItemInfoShipping
          shipTime={this.state.item.shipTime}
          shipFrom={this.state.item.shipFrom}
          shipCost={this.state.item.shipCost}
        />
        <ItemInfoPolicies
          exchanges={this.state.item.storePolicies.exchanges}
          returns={this.state.item.storePolicies.returns}
          refunds={this.state.item.storePolicies.refunds}
          paymentsAccepted={this.state.item.storePolicies.paymentsAccepted}
          customPolicies={this.state.item.storePolicies.custom}
        />
        <ItemInfoFaqs
          faqs={this.state.item.faqs}
        />
        <ItemInfoMeetSeller
          storeOwnerName={this.state.item.storeOwnerName}
          storeName={this.state.item.storeName}

        />
      </div>
    );
  }
}

export default ItemInfoContainer;