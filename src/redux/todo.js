import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name:'todos',
  initialState:[{
    id: uuidv4(),
    description: "n9oum 7H",
    isDone: false,
  },
  {
    id: uuidv4(),
    description: "noftor ftour sbé7",
    isDone: false,
  },
  {
    id: uuidv4(),
    description: "némchi na9ra",
    isDone: false,
  }],
  reducers:{
    //add function
    Add:(state,action)=>{
      const newTask ={
        id: uuidv4(),
        description: action.payload,
        isDone: false,
      }
      state.push (newTask)
    },
    //delete function
    Delete:(state,action)=>{
      return state.filter ((e)=> e.id !== action.payload)
    },
    //toggle function
    Toggle:(state,action)=>{
      return state.map ((e)=> {
        if(e.id === action.payload){
          return {...e, isDone : !e.isDone}
        }else {return e}
      })
    }
  }
})

export const {Add, Delete, Toggle} = todoSlice.actions
export default todoSlice.reducer