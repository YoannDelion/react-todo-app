import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

import './App.css';

class App extends Component {
    state = {
        todos: []
    }

    //fetch todos from server
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => this.setState({todos: res.data}));
    }

    //arrow function for binding
    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id ===  id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    }

    //arrow function for binding
    deleteTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        }));
    }

    //arrow function for binding
    addTodo = (title)  => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
        .then(res => this.setState({
            todos: [...this.state.todos, res.data]
        }))
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className='container'>
                        <Header />
                        <div className='appContent'>
                            <Route exact path='/' render={ props => (
                                <React.Fragment>
                                    <AddTodo addTodo={ this.addTodo } />
                                    <Todos todos={ this.state.todos } toggleComplete={ this.toggleComplete } deleteTodo={ this.deleteTodo } />
                                </React.Fragment>
                            )} />
                            <Route path='/about' component={ About } />
                        </div>  
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
