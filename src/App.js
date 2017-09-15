import React, { Component } from 'react';
import {Icon} from 'react-fa';

class App extends Component {
  render() { 
    return (
      <div className="App">   
        { this.props.children }
      </div>
    );
  }
}

export default App;