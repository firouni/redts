import React from 'react'
import TodoCard from './TodoCard';
import { useSelector } from "react-redux";


const TodoList = () => {
    const todos = useSelector(state=>state.todos)
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

