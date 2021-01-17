import React from 'react';


function TodosCount (props) {
    return (
        <div className="total">total items: <span className="output">{props.todos}</span></div>
    )
}

export default TodosCount
