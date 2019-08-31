import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    //arrow function for binding
    getStyle = () => {
        return {
            background: this.props.todo.completed ? '#f4f4f4' : '#fff',
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
                    <button className='deleteBtnStyle' onClick={ this.props.deleteTodo.bind(this, id) }>X</button>
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

export default TodoItem;