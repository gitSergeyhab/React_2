import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "first1", important: true, id: 1},
                {label: "second2", important: false, id: 2 },
                {label: "third3", important: true, id: 3}
            ]
        };
        this.maxId = 3;
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addItem(text) {
        this.setState(({data}) => {
            const newItem = {
                label: text,
                important: false,
                id: ++this.maxId
            }
            const newData = [...this.state.data, newItem];
            return {
                data: newData
            }
        })

    }


    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(dat => dat.id === id);
            const begin = data.slice(0,index);
            const end = data.slice(index+1);

            return {
                data: [...begin, ...end]
            };
            

        })
    }

    render() {
        return (
            <div className='app'>
            <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList 
                posts={this.state.data} 
                onDelete={this.deleteItem}
            />
            <PostAddForm
                onAdd={this.addItem}
            />
        </div>
        )

    }
}

export default App;