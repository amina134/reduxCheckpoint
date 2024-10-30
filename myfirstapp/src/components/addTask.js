import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { replaceTasks } from "../redux/taskSlice"
import {v4 as uuidv4}from 'uuid'
import {add} from '../redux/taskSlice'
const AddTask=()=>{
    // this part to count the number of tasks
    const taskSlices=useSelector(state=>state.taskSlices)
   
    const number=taskSlices.length;
    console.log("taskslices in the add task component",taskSlices);
  

    const Dispatch=useDispatch()
    //created a newtask state
    const [newTask,setNewTask]=useState({
        id:uuidv4(),
        name:"",
        description:"",
        markedSeen:"false"
    })
    //takwe the input of each attibute of my new task
     const handleInput=(e)=>{
         setNewTask((newTask)=>({...newTask,[e.target.name]:e.target.value})) 
         console.log("new task",newTask) 
     }

     const addNewTask=()=>{
        Dispatch(add(newTask))
     }
     const sortTasks=()=>{
      const ordered=[...taskSlices].sort((a,b)=>a.markedSeen-b.markedSeen).reverse()
      Dispatch(replaceTasks(ordered))
     console.log("ordered",ordered);
     
     }
   
     
    
    return(
        <>
       
        <div style={{fontSize:"45px",fontFamily:"monospace"}}>
        Tasks {number}
    </div>
      <div style={{width:"50%",height:"180px",margin:"50px", padding: "20px",
       
        backgroundColor: "#FEF9F2",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        border: "1px solid #ddd",
        position :"relative",
        
        cursor: "pointer",
        textAlign: "left",
        lineHeight: "1.5"}}>
       
        <div>
        <div>
        <label style={{fontSize:"20px", fontFamily:"monospace"  }}> name of the task:</label>
        <input style={{position:"relative",left:"115px",width:"370px"}} type="text" placeholder="name of your task"  name="name" onChange={handleInput}/> 
       
        </div>
<br></br>
       <div>
       <label style={{fontSize:"20px", fontFamily:"monospace",position:"relative",bottom:"50px"}}> Description of the task:</label>
        <textarea style={{width:"370px",height:"90px" ,position:"relative",left:"30px"}} type="text" placeholder="description of your task" name="description" onChange={handleInput}></textarea>
        </div>
        <button style={{backgroundColor:"pink", borderRadius:"10px",fontSize:"17px"}}  onClick={()=>addNewTask()}>ADD TASK</button>
     
       
      </div>
      <div>
        <button style={{position:'absolute',left:"1000px" ,top:'0px' ,fontSize:'25px',paddingleft:"30px",width:"130px",height:"40px", backgroundColor:"pink" ,borderRadius:"15px"}} onClick={()=>sortTasks()}>Sort</button>
      </div>
      </div>
      </>
    )
}
export default AddTask