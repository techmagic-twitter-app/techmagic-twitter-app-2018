import React, { Component } from 'react';

// Components
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import PostsList from './components/PostsList/PostsList'


class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <PostsList/>
          <Input/>
        </div>
    );
  }
}

export default App;
