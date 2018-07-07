
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash'

// Actions
import {fetchPost} from '../../actions/posts';

// Components
import Post from './Post/Post';

// styles
import './PostsList.css';

 class PostsList extends Component {

  componentDidMount(){
    this.props.fetchPost();
  }

  renderPosts= () => {
    const {posts} = this.props;
    // adding postId to usersPosts array
    let usersPosts = _.map(posts, (posts, postUID) => {
      posts.postId = postUID;
      return posts;
    });


    if (this.props.uid) {
      return usersPosts
        .filter((post) => post.userId === this.props.uid)
        .map((post)=><Post currentPost={post}  key={post.postId}/>);
    } else if (!this.props.uid && !this.props.user) {
      return usersPosts
        .map((post)=><Post currentPost={post}  key={post.postId}/>);
    } else if (!this.props.uid && this.props.user) {
      return usersPosts
        .filter((post) => post.userId === this.props.user.uid)
        .map((post)=><Post currentPost={post}  key={post.postId}/>);
    }


    // if (this.props.uid) {
    //   return this.props.posts.usersPosts
    //     .filter((post) => post.userId === this.props.uid)
    //     .map((post,index)=><Post currentPost={post}  key={index}/>);
    // } else if (!this.props.uid && !this.props.user) {
    //   return this.props.posts.usersPosts
    //     .map((post,index)=><Post currentPost={post}  key={index}/>);
    // } else if (!this.props.uid && this.props.user) {
    //   return this.props.posts.usersPosts
    //     .filter((post) => post.userId === this.props.user.uid)
    //     .map((post,index)=><Post currentPost={post}  key={index}/>);
    // }


    
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



