import React from "react";
import { useDispatch } from "react-redux";
import { Delete } from "../redux/todo";
import {Toggle} from "../redux/todo"


const TodoCard = ({minitodo}) => {
    const dispatch=useDispatch();
    const handledelete=(id)=>{
        dispatch(Delete (id))
    }
    const handleToggle=(id)=>{
        dispatch(Toggle (id))
    }
    return (
    <div>
        <ul>
            <li>
                {minitodo.description}
            </li>
            
            <button onClick={()=>handledelete(minitodo.id)} >delete</button>
            <button onClick={()=>handleToggle(minitodo.id)} >not yet</button>
        </ul>
    </div>
    )
}

export default TodoCard
