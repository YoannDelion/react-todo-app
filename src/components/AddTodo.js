import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit } style={{ display: 'flex' }}>
                <input 
                    type='text' 
                    name='title' 
                    placeholder='Add Todo Item...' 
                    value={ this.state.title }
                    onChange={ this.onChange }
                    className='inputStyle'
                />
                <input 
                    type='submit'
                    value='Submit'
                    className="btn"
                />
            </form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo;