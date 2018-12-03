import React, { Component } from 'react';
import axios from 'axios';
import style from './App.less';

class App extends Component {

  componentDidMount() {
    axios.get(`https://api.myjson.com/bins/162vrt`)
      .then(res => {
        const profile = res.data.profile;
        const feed = res.data.feed;
        console.log(profile);
        console.log(feed);
        //this.setState({ persons });
      })
  }

  render() {
    return (
      <container className="facebook">
        <header className="facebook-header">

        </header>
      </container>
    );
  }
}

export default App;
