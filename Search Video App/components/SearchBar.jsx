import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    handleSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    }


    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                            type="text"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;