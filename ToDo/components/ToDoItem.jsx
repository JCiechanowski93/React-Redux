import React from 'react';

class ToDoItem extends React.Component {
    state = {}
    handleDoneClick = () => {
        
        this.props.onDone(this.props.title);
    }

    render() {
        return (
            <li>
                <span>{this.props.title}</span>
                <button onClick={this.handleDoneClick}>Zakoncz</button>
            </li>
        );
    }
}

export default ToDoItem;