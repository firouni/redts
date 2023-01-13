import React from "react";
import { DeleteTodo } from "../redux/todo";
import {ToggleTodo} from "../redux/todo"
import { useDispatch } from "react-redux";


const TodoCard = ({minitodo}) => {
    const dispatch=useDispatch()
    const handledelete=(id)=>{
        dispatch(DeleteTodo (id))
    }
    const handleToggle=(id)=>{
        dispatch(ToggleTodo (id))
    }
  return (
    <div>
        <ul>
            <li>
                {minitodo.text}
            </li>
            <button onClick={()=>handledelete(minitodo.id)} >delete</button>
            <button onClick={()=>handleToggle(minitodo.id)} >not yet</button>
        </ul>
      
    </div>
  )
}

export default TodoCard
