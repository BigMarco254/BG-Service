import React from "react";

class ItemInfoDetails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showMoreDetails: false
    };
    this.onClickToggleMore = this.onClickToggleMore.bind(this);
  }

  onClickToggleMore() {
    this.setState(oldState => {
      if (oldState.showMoreDetails) {
        $("#moreInfoCollapse").collapse("hide");
        return { showMoreDetails: false };
      } else {
        $("#moreInfoCollapse").collapse("show");
        return { showMoreDetails: true };
      }
    });
  }

  render() {
    return (
      <div className="item-info-details">
        <p
          className="mb-1"
          style={{
            fontSize: "13px",
            fontWeight: 300,
            color: "rgb(89, 89, 89)"
          }}
        >
          Description
        </p>
        <div className="item-info-description">
          <p>{this.props.description}</p>
        </div>
        <div className="collapse" id="moreInfoCollapse">
          more here
        </div>
        <button
            className="learn-more btn btn-block btn-showMore mb-3" onClick={this.onClickToggleMore}
          >
            {this.state.showMoreDetails ? "Less" : "Learn more about this item"}
          </button>
      </div>
    );
  }
}

export default ItemInfoDetails;
