import React from 'react';
import './App.css';
import Header  from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import TodosCount from "./components/TodosCount";

// import App, { Component } from "react";


class App extends React.Component {
  constructor(props){
    super(props)

    this.appName = 'Simple Todo App '; 

    // this.state = {
    //   "todos" :[
    //     {
    //       "userId": 1,
    //       "id": 1,
    //       "title": "delectus aut autem",
    //       "completed": true
    //     },
    //     {
    //       "userId": 1,
    //       "id": 2,
    //       "title": "quis ut nam facilis et officia qui",
    //       "completed": false
    //     }
    //   ]
    // }

    this.state = {
      todos: []
    }

    // this.addTodo = this.addTodo.bind(this);
  }


  addTodo(todoTitle){
    console.log(todoTitle);
    const todos = this.state.todos;

    // this.state.todos[1].id = 999;

    const id = todos.length+1; // todo: make it propper

    // const newTodos = this.state.todos.push({
    //   "userId": 1,
    //   "id": id,
    //   "title": todoTitle,
    //   "completed": false
    // })

    const newTodos = [...todos,{
        "userId": 1,
        "id": id,
        "title": todoTitle,
        "completed": false
      }
    ]

    this.setState( {todos:newTodos} );

  }

  componentDidMount(){

    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }

  addTodo = (todoTitle)=>{
    const todos = this.state.todos;
    const id= todos[todos.length-1].id+1;

    const newTodo = {
      "userId": 1,
      "id": id,
      "title": todoTitle,
      "completed": false
    }

    this.setState({"todos":[...this.state.todos,newTodo]});
  }

  removeTodo = (todoId)=>{
    const todos = this.state.todos.filter(todo=>todo.id !== todoId);
    // this.setState({"todos":todos});
    this.setState({todos}); // from ES6
  }

  toggleComplete = (todoId)=>{
    const todos = this.state.todos.map(
      todo=>todo.id===todoId ? {...todo,completed:!todo.completed} : {...todo}
    );
    this.setState({todos:todos});
  }

  render(){
    return (
      <div className="page">
        <Header appName={this.appName}/>
        <main className="todoApp">
          <AddTodo addTodo={this.addTodo}/>
          <TodoList
            todos={this.state.todos}
            removeTodo={this.removeTodo}
            toggleComplete={this.toggleComplete}/>
          <TodosCount count={this.state.todos.length}/>
        </main>
      </div>
    )
  }
}


export default App;


// class App extends React.Component {
//   constructor(props){
//     super(props)

//     this.appName = 'Simple Todo App '; 

//     this.state = {
//       "todos" :[
//         {
//           "userId": 1,
//           "id": 1,
//           "title": "delectus aut autem",
//           "completed": true
//         },
//         {
//           "userId": 1,
//           "id": 2,
//           "title": "quis ut nam facilis et officia qui",
//           "completed": false
//         }
//       ]
//     }

//     this.addTodo = this.addTodo.bind(this);
//   }


//   addTodo(todoTitle){
//     console.log(todoTitle);
//     const todos = this.state.todos;

//     // this.state.todos[1].id = 999;

//     const id = todos.length+1; // todo: make it propper

//     // const newTodos = this.state.todos.push({
//     //   "userId": 1,
//     //   "id": id,
//     //   "title": todoTitle,
//     //   "completed": false
//     // })

//     const newTodos = [...todos,{
//         "userId": 1,
//         "id": id,
//         "title": todoTitle,
//         "completed": false
//       }
//     ]

//     this.setState( {todos:newTodos} );

//   }


//   componentDidMount(){
//     // HW:  use fetch API to set initial state, instead of the hardcoded values above
//     // You can use the "https://jsonplaceholder.typicode.com/todos" for server endpoint
//     // Reference: https://reactjs.org/docs/faq-ajax.html
//   }

//   addTodo = (todoTitle)=>{
//     const todos = this.state.todos;
//     const id= todos[todos.length-1].id+1;

//     const newTodo = {
//       "userId": 1,
//       "id": id,
//       "title": todoTitle,
//       "completed": false
//     }

//     this.setState({"todos":[...this.state.todos,newTodo]});
//   }

//   removeTodo = (todoId)=>{
//     const todos = this.state.todos.filter(todo=>todo.id !== todoId);
//     // this.setState({"todos":todos});
//     this.setState({todos}); // from ES6
//   }

//   toggleComplete = (todoId)=>{
//     const todos = this.state.todos.map(
//       todo=>todo.id===todoId ? {...todo,completed:!todo.completed} : {...todo}
//     );
//     this.setState({todos:todos});
//   }

//   render(){
//     return (
//       <div className="page">
//         <Header appName={this.appName}/>
//         <main className="todoApp">
//           <AddTodo addTodo={this.addTodo}/>
//           <TodoList
//             todos={this.state.todos}
//             removeTodo={this.removeTodo}
//             toggleComplete={this.toggleComplete}/>
//           <TodosCount count={this.state.todos.length}/>
//         </main>
//       </div>
//     )
//   }
// }

// export default App;