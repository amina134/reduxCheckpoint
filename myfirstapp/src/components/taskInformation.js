import {EditText}from 'react-edit-text'
import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { delet,edit ,markedSeen} from '../redux/taskSlice';
import { SiCheckio, SiMarkdown, SiTicktick } from "react-icons/si";
const TaskInformation=({taskInformation})=>{
    const [singleTask,setSingleTask]=useState(taskInformation)
    const [updatedState,setUpdatedState]=useState(false) // to check if it s updated or not
    // task done 
    // console.log("taskinformation BEFORE", taskInformation.markseen);
 
//     console.log("taskinformation AFTER", taskInformation.markseen);
    
    // const [markseen,setMarkSeen]=useState(false)
     
    console.log("singletask",singleTask);
    const Dispatch=useDispatch();
    // this handles the delete
    const deleteTask=(id)=>{
        Dispatch(delet(id))
    }
    //this handle the update
    const handleEditTask =()=>{
   
         Dispatch(edit(singleTask))

         setUpdatedState(false)
        
    }
    const handleDone=()=>{
     
       
       Dispatch(markedSeen(singleTask.id))
        setSingleTask({...singleTask,markseen:!singleTask.markseen})
       
    }
    console.log("edited target:",singleTask);

    return(
        <div>
       
  
        
        <div style={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "18px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "500px",
            minHeight: "120px",
            padding: "20px",
            margin: "10px 0",
           backgroundColor: singleTask.markseen ? "grey" : "#FEF9F2",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            border: "1px solid #ddd",
            transition: "transform 0.2s ease-in-out",
            cursor: "pointer",
            textAlign: "left",
            lineHeight: "1.5"
   
            }}
              >
             <EditText style={{
                fontWeight: "bold",
                fontSize: "22px",
            

                width:"180px",
                marginBottom: "8px"
            }}  editable="true" value={singleTask.name} onChange={(e)=>{setSingleTask({...singleTask,name:e.target.value}) ;setUpdatedState(true)}}/>  
            <div>
            <SiTicktick onClick={handleDone }/>
            </div>
            <EditText style={{
                fontSize: "16px",
                margin:"20px",
                border:"1px solid ",
                width:"450px",
                height:"150px"
            }}  editable="true" value={singleTask.description} onChange={(e)=>{setSingleTask({...singleTask,description:e.target.value});setUpdatedState(true)}}
            /> 
            {/* DELETE BUTTON */}
            <button style={{width:"130px",height:"40px", backgroundColor:"pink" ,borderRadius:"15px", position:"absolute",left:"230px"  ,border:"1px solid black"}} onClick={()=>deleteTask(singleTask.id)}>Delete</button>
            {/* update button */}
           { updatedState ? 
              <button style={{width:"130px",height:"40px", backgroundColor:"#3A6D8C" ,borderRadius:"15px", position:"absolute",left:"370px" }} onClick={handleEditTask}>Update</button>
            :
            <button style={{width:"130px",height:"40px", backgroundColor:"#8EACCD" ,borderRadius:"15px", position:"absolute",left:"370px"}} disabled>Update</button>
            
           }
          
        </div>
        
     
      
        </div>
    )
}
export default TaskInformation;




// function verif(ch){
//     i=0
//     test=true
//     while(i<ch.length && test){
//         if ( i!=(ch.length-1)&&(ch[i]=='') &&( ch[i+1]='') ){
//             test =false
//         }
//         i++;
//     }
//     return test
// }
// const ch=" amina  kouni est  "
// print(verif(ch))