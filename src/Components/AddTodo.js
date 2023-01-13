import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from 'react-redux'
import { Add } from "../redux/todo";

const AddTodo =()=> {
    const dispatch=useDispatch()
    const[input,setInput]=useState('')
    const Adds =()=>{
        dispatch (Add(input))
       
    }
    return (
        <div>
        <input placeholder="enter todo" onChange={(e)=> setInput (e.target.value)} />
        <button onClick={Adds} >Add Todo</button>
        </div>
    )
}
export default AddTodo