import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import PostsList from './components/PostsList/PostsList'
import UserList from './components/UserList/UserList';


class App extends Component {
  render() {
    return (
        <div className="container">
          <Header/>
          <div className="main">
            <UserList/>
            <div>
              <Input/>
              <PostsList/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
