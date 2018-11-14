import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 619c181c3337954d2d0ccc5d14bac30079fd45a2e7a8eb36523ea0df26771886'
            }
        }).then((response) => {
            console.log(response);

        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;