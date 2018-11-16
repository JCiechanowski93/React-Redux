import React from 'react';

class ToDoList extends React.Component {
    state = { task: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.task);
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })

    }


    render() {
        return (


            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <label>Add task
                        <input type="submit" className="add" ></input>
                    </label>
                </form>

            </div>
        );
    }
}

export default ToDoList;