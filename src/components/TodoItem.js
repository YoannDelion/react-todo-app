import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    //arrow function for binding
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding:'10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type='checkbox' onChange={ this.props.toggleComplete.bind(this, id) } /> {' '}
                    { title }
                    <button style={ btnStyle } onClick={ this.props.deleteTodo.bind(this, id) }>X</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    background: '#f00',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;