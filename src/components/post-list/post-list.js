import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

const postList = ({posts, onDelete}) => {

    // let allPosts = posts.map(post => {
    //     return (
    //     <li key={post.id} className='list-group-item'>
    //         <PostListItem label={post.label} important={post.important} />
    //     </li>
    //     );
    // });

    let allPosts = posts.map(post => {
        return (
            <li key={post.id} className='list-group-item'>
                <PostListItem {...post}
                onDelete={() => onDelete(post.id)}
                 />
            </li>
        );
    });

    return (
        <ul className='app-list list-group'>
            {allPosts}
        </ul>
    )
};

export default postList;
