
import React, { Component } from 'react';
// Firebase config
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// Actions
import {signIn, signOut, fetchUser} from '../../actions/user';
import {fetchUid} from '../../actions/uid';
//styles
import './Header.css';

 class Header extends Component {
    
  componentDidMount(){
    this.props.fetchUser();
  }

  showAll = () => {
    this.props.fetchUid('');
  }

  render() {
    const {currentUser, signIn, signOut} = this.props;
    return (
      <header>
          <h2 onClick={()=>this.showAll()}>{currentUser.displayName}</h2>
          {currentUser?
          <button onClick={signOut}>signOut</button>:
          <button onClick={signIn}>signIn</button>}
      </header>
    )
  }
}


const mapStateToProps = state =>({
  currentUser : state.user,
  uid: state.uid,
  user: state.user
})


const mapDispatchToProps = dispatch => bindActionCreators({
    signIn,
    signOut,
    fetchUser,
    fetchUid
  },dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header);
