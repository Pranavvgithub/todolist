import React,{useState} from 'react'
import {BrowserRouter} from 'react-router-dom';
import {Route,Switch} from 'react-router-dom'
import App from './App';
import {useHistory} from 'react-router-dom'
import { Button, FormControl,Input,InputLabel } from '@material-ui/core';
function Login() {
    const [e,setE]=useState('')
    const [input,setInput]=useState('')
    const [input1,setInput1]=useState('')
    const  history = useHistory()
    return (
        <div className="App">
            <h1>Username : pranav@verzeo.com</h1>
            <h1>Password : 1234</h1>
            <br></br>
            <br></br>
            <form>
            <FormControl>
            <InputLabel >Enter Your Username</InputLabel>
            <Input value={input}  onChange={event=>{setInput(event.target.value)}}>
            </Input>
            </FormControl>
            <br></br>
            <br></br>
            <br></br>
            <FormControl>
            <InputLabel >Enter Your Password</InputLabel>
            <Input value={input1}  onChange={event=>{setInput1(event.target.value)}}>
            </Input>
            </FormControl>
            <br></br>
            <br></br>
            <br></br>
          <Button  disabled={!(input && input1)} variant="contained" color="primary" type="submit" onClick={(event)=>{
              event.preventDefault();
               if(input=="pranav@verzeo.com" && input1=="1234")
                {history.push(`/App/${input}`)
            }
                else
                {
                   setE('Wrong Username or Password. Type in username as pranav@verzeo.com and password as 1234')
                }
            }}>Login</Button>
            </form>
            {e}
        </div>
    )
}

export default Login
