
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import {fetchPost} from '../../actions/posts';

// Components
import Post from './Post/Post';

// styles
import './PostsList.css'

 class PostsList extends Component {

  componentDidMount(){
    this.props.fetchPost();
  }

  renderPosts= () =>{
    //console.log(this.props.posts.usersPosts)
    return this.props.posts.usersPosts
    .filter((post) => post.userId === this.props.uid)
    .map((post,index)=><Post currentPost={post}  key={index}/>)
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
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPost
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);



