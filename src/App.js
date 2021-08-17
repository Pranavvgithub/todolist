
// This project is made by Mr. Pranav Verma, ReactJS Batch of Verzeo
// guided by Instructor :- Mr. Pavan Bhansali 
import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, FormControl,Input,InputLabel } from '@material-ui/core';
import Todo from './Todo'
import db from './firebase';
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.css';
import SearchTodo from './SearchTodo';
import Example from './Example';
import {Route,Switcher} from 'react-router-dom'
import {useParams} from 'react-router-dom'
// the above two imports are because of firebase
function App() {
  const [todos,setTodos]=useState(['abc','def'])
  const [input,setInput]=useState('')
  const [id_num,setId_num]=useState(0)
  const [search,setSearch]=useState('')
  const [searchtodo,setSearchtodo]=useState('')
  // input is the value of the input box and todos is the array storing the todos
  // 1st when the user types something in the input box and hit enter it the input value gets saved in the database and then we fetch all the tasks and store it in todos
  useEffect(() =>{
  //when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  //this code here runs when the app loads, we need to
  
 db.collection("todos").orderBy('timestamp','desc').onSnapshot
 (snapshot=>
  {setTodos(snapshot.docs.map (doc=>({id:doc.id,todo:doc.data().todo})
    ))})},
    [])
    // the above code is to add the tasks to the database
    // the format id:doc.id and todo:doc.data is used to access the todo by its id .Later in case if user want to delete or update any todo then that guy has access the todo by id 
  //[] means it runs once when the app loads. if [dependencies] then runs when the app loads once and runs whenever the dependencies are changed
  const addTodo=(event)=>{
    event.preventDefault();
    // the above line prevents the page reloading
    setId_num(id_num+1)
    db.collection('todos').add(
      {todo:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        id_num:id_num
      }
      )
      // this function adds data to the database whenever the Add button is clicked or enter is hit
    setInput('');
    // the above line is written to empty the Add todo input field after storing any todo
  }
  
  
  
    return (
    
   <div className="App">
  
   <br></br>
   <form>
     <div className="row">
       <div className="col">
   <FormControl>
  <InputLabel >✍ Write a Todo</InputLabel>
  <Input value={input} onChange={(event)=>setInput(event.target.value)}/>
  {/* input box to enter the tasks */}
  {/* used material ui to make it beautiful */}
</FormControl>
</div>
<div className="col">

<FormControl>
  <InputLabel >🔎 Search a Todo</InputLabel>
  <Input value={search} onChange={(event)=>setSearch(event.target.value)}/>
  {/* input box to enter the tasks */}
  {/* used material ui to make it beautiful */}
</FormControl>
</div>
</div>
<br></br>
<div className="row">
  <div className="col">
   <Button disabled={!input} variant="contained" color="primary"type="submit" onClick={addTodo}>Add
</Button>
{/* button type="submit is written so that it gets clicked automatically when user hits enter. wwhen the above button is clicked it executes a function known as assTodo which saves the entered value into the database" */}
</div>
<div className="col">
<Button disabled={!search} variant="contained" color="primary"type="submit" onClick={addTodo}>Search
</Button>
</div>
</div>

   </form>
   <br></br>
   
   <br></br>
   
   <div className="row">
     <div className="col">
     <h1>Tasks:-</h1>
     {todos.map(todo=>(
       <Todo  todo={todo}/>
     ))}
     </div>
    {/* todos is the collection todos. todo is the iterator to each document inside the collection  . todo.todo :- the latter todo means we are reffereing to a specific field named todo inside the document pointed by the iterator todo  */}
    {/* every document from the collection todos is passed to component Todo.js as props*/}
    <div className="col">
<h1>Searched element:-</h1>
    {todos.map(todo=>{
      if (search && todo.todo.toLowerCase().includes(search)) {
        return(
       <Todo todo={todo}/>
       
      //  the elements whose todo matches with the data the user has entered in the search box are passed to Todo.js as props
    )
      }
      }   )
    }
    </div>
    </div>
   </div> 
    );
     }
    export default App;