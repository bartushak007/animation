import React, { Component } from 'react';
import GalleryOfActivity from './Components/GalleryOfActivity/GalleryOfActivity';

class App extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      activityInformation: [
        {
          title: 'Downloads',
          value: 1000,
          icon: '9760',
          id: 0
        },
        {
          title: 'Likes',
          value: 100,
          icon: '9762',
          id: 1
        },
        {
          title: 'Awards',
          value: 454544550,
          icon: '9733',
          id: 2
        },
        {
          title: 'Wins',
          value: 1000000,
          icon: '9763',
          id: 3
        },
        {
          title: 'Knockouts',
          value: 21533,
          icon: '9729',
          id: 4
        }
      ]
    }
  }  

  render() {
    return (
      <div>
        <GalleryOfActivity activityInformation={ this.state.activityInformation }/>
      </div>
    );
  }
}

export default App;
