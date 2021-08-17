import React from 'react'

function SearchTodo(props) {
    return (
        <div className="todo_style">
         
        <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{props.text}</h5>
            <h11>{props.todo.todo}</h11>
            
          </div>
    </div>
    </div>
    </div>
    );
}

export default SearchTodo
