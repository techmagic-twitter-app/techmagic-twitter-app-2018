import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
// Actions
import {fetchPost} from '../../actions/posts';
// Components
import Post from './Post/Post';
// Styles
import './PostsList.css';


 class PostsList extends Component {

  componentDidMount(){
    this.props.fetchPost();
  }


  renderPosts= () => {
    const {posts, uid, user} = this.props;
    // adding postId to usersPosts array
    let usersPosts = _.map(posts, (posts, postUID) => {
      posts.postId = postUID;
      return posts;
    });

    if (uid) {
      return usersPosts
        .filter((post) => post.userId === uid)
        .map((post)=><Post currentPost={post}  key={post.postId}/>);
    } else if (!uid) {
      return usersPosts
        .map((post)=><Post currentPost={post}  key={post.postId}/>);
    } else if (!uid && user) {
      return usersPosts
        .filter((post) => post.userId === user.uid)
        .map((post)=><Post currentPost={post}  key={post.postId}/>);
    } 
  }
  

  render() {
    return (
      <ul className="PostsList">
        {this.renderPosts()}
      </ul>
    )
  }
}


const mapStateToProps = state =>({
  posts: state.posts,
  user: state.user,
  uid: state.uid
});


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPost
},dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(PostsList);



