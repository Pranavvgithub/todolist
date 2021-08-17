import { List, ListItem, ListItemAvatar, ListItemText,Avatar, Modal } from '@material-ui/core'
import React,{useState} from 'react'
import './Todo.css';
import 'bootstrap/dist/css/bootstrap.css';
import db from './firebase';
import {Button}  from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Delete } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import Example from './Example';


function Todo(props) {
 const Exp=props.exp
    return (

     
      <div className="todo_style">
         
        <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{props.text}</h5>
            <h11>{props.todo.todo}</h11>
            
          </div>
          <div class="row">
            <div class="col">
          <EditIcon color="primary" onClick={event=>{

            db.collection('todos').doc(props.todo.id).update({
              
    todo: (prompt("upadate the item"))
})
}}> ✍ Edit </EditIcon>
</div>
<div className="col">
 <DeleteIcon color="primary" onClick={event=>{

db.collection('todos').doc(props.todo.id).delete()}}> ✍ Edit </DeleteIcon>
</div>
</div>
        </div>
      </div>
       
        </div>
    )
}

export default Todo;
