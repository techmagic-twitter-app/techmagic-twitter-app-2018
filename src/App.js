import React, { Component } from 'react';

// Components
import Header from './components/Header/Header';
import Input from './components/Input/Input'


class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Input/>
        </div>
    );
  }
}

export default App;
