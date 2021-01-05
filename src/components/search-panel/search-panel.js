import React from 'react';
import './search-panel.css';


class SearchPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }

        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(evt){
        const term = evt.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
        // this.setState({
        //     term: term
        // })
    }

    render() {
        return (
            <input 
                className='form-control search-input'
                type='text'
                placeholder='input here'
                onChange={this.onUpdateSearch}
            />
            )
    }

}

export default SearchPanel;