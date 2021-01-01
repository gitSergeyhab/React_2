import React from 'react';

const PostAddForm = () => {
    return (
        <form className='bottom-panel d-flex'>
            <input
                type='text'
                placeholder='what are you thinking about?'
                className='form-control new-post-label'
            />

            <button
                type='submit'
                className='btn btn-outline-primary'>
            Add</button>
        </form>
    )
}

export default PostAddForm;