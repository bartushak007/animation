import React, { Component } from "react";
import ActivityInformationBlock from "./ActivityInformationBlock";
import './galleryOfActivity.scss';

class GalleryOfActivity extends Component {
  render() {
    return (
      <div className="galleryOfActivity">
        { this.props.activityInformation.map(e => {
            return <ActivityInformationBlock key={ e.id } activityInformation={ e } />;
          }) }
      </div>
    );
  }
}

export default GalleryOfActivity;
