
import React, { Component } from 'react';
// Firebase config
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {signIn, signOut, fetchUser} from '../../actions/user';

//styles
import './Header.css';

 class Header extends Component {
    
      componentDidMount(){
        this.props.fetchUser();
      }

  render() {
    return (
      <header>
          <h2>{this.props.currentUser.displayName}</h2>
          {this.props.currentUser?
          <button onClick={this.props.signOut}>signOut</button>:
          <button onClick={this.props.signIn}>signIn</button>}
      </header>
    )
  }
}

const mapStateToProps = state =>({
  currentUser : state.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
    signIn,
    signOut,
    fetchUser
  },dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header);
