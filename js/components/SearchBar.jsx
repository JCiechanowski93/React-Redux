import React, { Component } from 'react';

class SearchBar extends Component {
    state = { term: '' };

    onInputChange(event) {
        console.log(event.target.value);

        this.setState({
            term: event.target.value
        });

    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

export default SearchBar;