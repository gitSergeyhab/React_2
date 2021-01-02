import React from 'react';

import './post-list-item.css';


class PostListItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            important: false,
            like: false
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {label} = this.props;

        const {important, like} = this.state;

        let classes = 'app-list-item d-flex justify-content-between';

        if (important) classes += ' important';
        if (like) classes += ' like';

        return (
            <div className={classes} >
                <span className='app-list-item-label'
                    onClick={this.onLike}>
                    {label} xxx
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-star btn-sm'
                            onClick={this.onImportant}>
                        <i className='fa fa-star'></i>
                    </button>
        
                    <button type='button' className='btn-trash btn-sm'>
                        <i className='fa fa-trash-o'></i>
                    </button>
        
                    <i className='fa fa-heart'></i>
                </div>
            </div>
        )
    }
}

export default PostListItem;