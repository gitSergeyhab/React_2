import React from 'react';

import './post-add-form.css';


class PostAddForm extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }

        this.change = this.change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    change(evt) {
        this.setState({
            text: evt.target.value
        })    
    }

    onSubmit(evt) {
        evt.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form className='bottom-panel d-flex'
                    onSubmit={this.onSubmit}>

                <input
                    type='text'
                    placeholder='what are you thinking about?'
                    className='form-control new-post-label'
                    onChange={this.change}
                    value={this.state.text}
                />

                <button
                    type='submit'
                    className='btn btn-outline-primary'
                    >
                Add</button>
            </form>
        )

    }

}

export default PostAddForm;