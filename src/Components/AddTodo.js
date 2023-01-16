import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Add } from "../redux/todo";
import { Button } from "react-bootstrap";

const AddTask =()=> {
    const todo = useSelector((state)=>state.todos)
    console.log(todo)
    const dispatch=useDispatch()
    const[input,setInput]=useState("")
    console.log(input)
    const Adds =()=>{
        dispatch (Add(input))
    }
    return (
        <div>
        <input placeholder="enter task" onChange={(e)=> setInput (e.target.value)} />
        <Button variant="success" onClick={Adds} >Add Task</Button>
        </div>
    )
}
export default AddTask;