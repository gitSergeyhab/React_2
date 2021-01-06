import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';


function likeAndImportant(d, id, iol) {
    const index = d.findIndex(dat => dat.id === id);
    const old = d[index]
    const updItem = {...old};
    updItem[iol] = !old[iol];
    const newData = [...d.slice(0, index), updItem, ...d.slice(index+1)]
    return {
        data: newData
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "first1", important: true, liked: false, id: 1},
                {label: "second2", important: false, liked: false, id: 2},
                {label: "third3", important: true, liked: false, id: 3}
            ],
            term: '',
            filter: 'All'
        };
        this.maxId = 3;
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this)
    }

    addItem(text) {
        this.setState(({data}) => {
            const newItem = {
                label: text,
                important: false,
                liked: false,
                id: ++this.maxId
            }
            const newData = [...data, newItem];
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

    onToggleImportant(id) {
        this.setState(({data}) => {
            return likeAndImportant(data, id, 'important');
        }) 
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            return likeAndImportant(data, id, 'liked');
        }) 
    }

    searchPosts(items, term, filter) {
        if (!term.length) return items;
        return items.filter(item => item.label.indexOf(term) > -1);
    }

    filterPosts(items, filter) {
        if (filter === "All") return items;
        return items.filter(item => item[filter])
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(post => post.liked).length;
        const allPosts = data.length;
        
        const visiblePosts = this.filterPosts(this.searchPosts(data, term, filter), filter);
        return (
            <div className='app'>
            <AppHeader
                liked={liked}
                allPosts={allPosts}
            />
            <div className='search-panel d-flex'>
                <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
            </div>
            <PostList 
                posts={visiblePosts} 
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked}
            />
            <PostAddForm
                onAdd={this.addItem}
            />
        </div>
        )

    }
}

export default App;