import {v4 as uuidv4} from 'uuid';
import {createSlice} from '@reduxjs/toolkit'
import { useState } from 'react';


const TaskSlice=createSlice({
    name:"taskSlices",
    initialState:[
        { id:uuidv4(),
          name:"homework1",
          description:"to do urgently",
          markedSeen:false
        },
        { id:uuidv4(),
            name:"coding",
            description:"to do urgently",
            markedSeen:false
          },
          { id:uuidv4(),
            name:"math",
            description:"to do urgently",
            markedSeen:false
          },
          { id:uuidv4(),
            name:"science",
            description:"to do urgently",
            markedSeen:false
          }
    ],
   
    reducers:{
      delet:(state,action)=>{
        return state.filter((e)=>e.id !==action.payload)
      },
      edit:(state,action)=>{
        const editedTask=action.payload;
        console.log("from task slice edited version",editedTask);
        
        const index=state.findIndex((e)=>e.id===editedTask.id)
        state.splice(index,editedTask)
        alert(`description of ${editedTask.name} is edited`)
      },
      add:(state,action)=>{
        const newTask=action.payload
        state.push(newTask)
      },
      // markedSeen:(state,action)=>{
      //   const markSeen=action.payload;
        
      // }
      markedSeen:(state,action)=>{
        const taskId=action.payload
        const index=state.findIndex((e)=>e.id==taskId)
        if (index!==-1){
          state[index].markedSeen= !state[index].markedSeen
        }
      },
      replaceTasks:(state,action)=>{
        return action.payload
      }
     
     
    }

})
export const{delet,edit,add,markedSeen,replaceTasks}=TaskSlice.actions;
export default TaskSlice.reducer
