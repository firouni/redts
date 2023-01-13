import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const TodoSlice = createSlice ({
    name : 'todos',
    initialState :[
    {text : 'Read a book ' , id :uuidv4() , isDone : false},
    {text : 'Morning Walk ' , id : uuidv4() , isDone : false},
    {text : 'Finish the assignment ' , id :uuidv4() , isDone : false},
    ],
    //partie fonctionnalité

    reducers : {
        //fonction add a new todo 
        Add  : (state,action)=>{
          const NEW = {
            isDone : false , 
            id : uuidv4() , 
            text : '',
        }
        state.push(NEW)
        },
        //fonction toggle
        ToggleTodo:(state,action) =>{
          return (state.map ((el) => el.id === action.payload ? {...el,isDone : !el.isDone } : el ))
        },
        //fonction delete todo
        DeleteTodo:(state,action) =>{
          return state.filter((e)=> e.id !== action.payload)
        }
    }
})

export const {Add,ToggleTodo,DeleteTodo} = TodoSlice.actions
export default TodoSlice.reducer