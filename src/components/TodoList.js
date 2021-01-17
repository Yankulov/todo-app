import React from 'react';
import TodoItem, { } from './TodoItem';

// const data = {
     
// }
function TodoList (props) {
    return (
        <ul className="todoListItems">
            {props.todos.map( todo => <TodoItem key={todo.id} title={todo.title} />)}
        </ul>
    )
}

export default TodoList
