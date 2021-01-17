import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodosCount from './components/TodosCount';

class App extends React.Component {

  constructor () {
    super()
    
    let appName = 'Simple Todo App';
    
    this.state = {
      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "felectus aut autem",
          "completed": false
        },
      ]
    }
  }
  
  render () {
    return (
      <div className='page'>
        <Header />
        {/* <Header appName={appName} /> */}
        <main className='todoApp'>
          <AddTodo />
          <TodoList todos={this.state.todos}/>
          <TodosCount todos={this.state.todos.length}/>
        </main>
      </div>
    )
  }
}

export default App


