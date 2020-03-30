import React from "react";

class ItemInfoPoliciesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policyModalOpen: false
    };
  }
  render() {
    return (
      <div>
        <button
          className="item-info-policies-modal-button btn btn-showMore"
          data-toggle="modal"
          data-target="#polociesModal"
          style={{
            color: "rgb(34, 34, 34)",
            fontSize: "13px",
            fontWeight: "bold"
          }}
        >
          View shop policies
        </button>
        <div className="modal" id="polociesModal">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Shop polocies for:
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              {`Exchanges: ${this.props.exchanges}`}
          {`Returns: ${this.props.returns}`}
          {`Refunds: ${this.props.refunds}`}
          {`Payments: ${this.props.paymentsAccepted}`}
          {this.props.customPolicies.map((policy, index) => (
            <div key={`policy${index}`} className="item-info-policy-details">
              <div>{policy.heading}</div>
              <div>{policy.description}</div>
            </div>
          ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemInfoPoliciesModal;
