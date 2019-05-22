import React from 'react';
import './Posts.css';
import PostsList from './PostsList';
import PostComments from './PostComments';
import { Route  } from 'react-router-dom';

const Posts = ( props ) => {
    return (
        <div className="posts">
            <div className="postsList">
                <PostsList />
            </div>
            <div className="postComments">
                <Route exact path="/posts/:postId" component={PostComments} />
            </div>
        </div>

    );
}

export default Posts;