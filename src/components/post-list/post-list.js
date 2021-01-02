import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

const postList = () => {
    return (
        <ul className='app-list list-group'>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </ul>
    )
};

export default postList;
