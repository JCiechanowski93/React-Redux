import React from 'react';
import ToDoList from './ToDoList.jsx';

class App extends React.Component {
    state = { task: [] }

    onFormSubmit = (data) => {
        this.setState({
            task: data
        });

    }

    render() {
        return (
            <div>
                <div>{this.state.task}</div>
                <ToDoList onFormSubmit={this.onFormSubmit} />
            </div>
        );
    }
}

export default App;