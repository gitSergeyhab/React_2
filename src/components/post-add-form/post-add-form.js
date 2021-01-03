import React from 'react';

import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
        <form className='bottom-panel d-flex'>
            <input
                type='text'
                placeholder='what are you thinking about?'
                className='form-control new-post-label'
            />

            <button
                type='button'
                className='btn btn-outline-primary'
                onClick={() => onAdd('Hell  ouuu!')}
                >
            Add</button>
        </form>
    )
}

export default PostAddForm;