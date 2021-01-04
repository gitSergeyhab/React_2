import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

const postList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    let allPosts = posts.map(post => {
        return (
            <li key={post.id} className='list-group-item'>
                <PostListItem {...post}
                onDelete={() => onDelete(post.id)}
                onToggleImportant={() => onToggleImportant(post.id)}
                onToggleLiked={() => onToggleLiked(post.id)}

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
