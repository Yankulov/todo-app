import React from 'react';


function AddTodo (props) {
    return (
        <div className='addTodo'>
            <input type='text' placeholder='add new todo...'/>
            <button className="btnAdd">Add</button>
        </div>
    )
}

export default AddTodo
