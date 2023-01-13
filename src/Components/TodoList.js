import React from 'react'
import { useSelector } from "react-redux";
import TodoCard from './TodoCard';


const TodoList = () => {
    const todos=useSelector(state=>state.todos)
    console.log('message',todos)
    return (
    <div>
{
    todos.map((e)=><TodoCard minitodo={e}/>)
}
    </div>
    )
}

export default TodoList

