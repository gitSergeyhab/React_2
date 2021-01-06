import React from 'react';

import './post-status-filter.css'

class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props)
        this.buttons = ['All', 'liked'];
    }

    render() {
        const myButtons = this.buttons.map(item => {

            const active = item === this.props.filter;
            const classN = active ? "btn-primary" : "btn-outline-primary";
            const classNname = `btn ${classN}`;
            

            return (
                <button key={item} type='button' className={classNname}
                onClick={() => this.props.onFilterSelect(item)} >{item}</button> 
            )
        })
        return (
            <div className='btn-group'>
                {myButtons}
                {/* <button type='button' className='btn btn-outline-secondary'> All</button>
                <button type='button' className='btn btn-outline-primary'>Liked</button> */}
            </div>
        )
    }
};

export default PostStatusFilter