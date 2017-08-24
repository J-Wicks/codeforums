import React from 'react';
import ReactDom from 'react-dom';

// Thread Fields: Topic, Content
// hasMany Posts belongsTo Users
// props.thread
// props.thread.Topic/Content
// props.thread.User/Posts
const Thread = props =>(
  <div id="threadBody">
    <h1> {props.thread.topic} </h1>
    <h2> {props.thread.user.name} </h2>
    <p> {props.thread.content} </p>
    {
      props.thread.posts.map(post =>{
        return <div>
          <p> {post.content} </p>
        </div>
      })
    }
  </div>
)

export default Thread