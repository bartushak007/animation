import React, { Component } from "react";

class ActivityInformationBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
    this.countAnimation = this.countAnimation.bind(this);
  }

  componentDidMount() {
    this.countAnimation();
  }  

  countAnimation() {
    const value = this.props.activityInformation.value;
    const slowCountdownTimes = 20;
    let wasCalled = true;
    let interval = 16.66;    
    
    const count = () => {
      setTimeout(() => {        
        const valueInterval = value / 60;

        if (value > this.state.current) {
          if (value - this.state.current <= slowCountdownTimes || value - this.state.current < valueInterval) {
            if (wasCalled && value > slowCountdownTimes) {
              this.setState({ current: value - slowCountdownTimes });
              wasCalled = !wasCalled;
            }
            this.setState({ current: this.state.current + 1 });
            interval = interval * 1.1;
          } else {
            this.setState({ current: Math.round(this.state.current + valueInterval) });
          }

          count();
        }
      }, interval);
    };

    count();
  }

  render() {
    const { icon, title } = this.props.activityInformation;
    return (
      <div className="galleryOfActivity__counter">
        <p className="galleryOfActivity__icon">
          { String.fromCharCode(icon) }
        </p>
        <p> 
          { this.state.current  }+ 
        </p>
        <h3 className="galleryOfActivity__title">
          { title }
        </h3>
      </div>
    );
  }
}

export default ActivityInformationBlock;
