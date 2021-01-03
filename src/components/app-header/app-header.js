import React from 'react';

import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h2>Header</h2>
            <h3>{allPosts} записей, из них понравилось {liked}</h3>
        </div>
    )
}

export default AppHeader;