
import React, { Component } from 'react';
// Firebase config
import {authRef} from '../../config/firebase';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {signIn, signOut} from '../../actions/index';

//styles
import './Header.css';

 class Header extends Component {

    state ={
        currentUser:''
      }
    
      componentDidMount(){
        authRef.onAuthStateChanged((user) => {
            if (user) {
                this.setState({currentUser:user});
            } else {
                this.setState({currentUser:''})
            }
        });
      }

  render() {
    return (
      <header>
          <h2>{this.state.currentUser.displayName}</h2>
          {this.state.currentUser?
          <button onClick={this.props.signOut}>signOut</button>:
          <button onClick={this.props.signIn}>signIn</button>
        }

      </header>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    signIn,
    signOut
  },dispatch)

export default connect(null, mapDispatchToProps)(Header);
