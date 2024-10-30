import {useSelector}from 'react-redux'
import TaskInformation from './taskInformation'
const TaskList=()=>{
    const taskSlices=useSelector(state=>state.taskSlices);
   
    
    
    
    
    console.log("this list is from tasklist",taskSlices);
    return(
        <div style={{display:"flex", flexDirection:"column"}} >
            {taskSlices.map((el)=><TaskInformation key={el.id}  taskInformation={el}/>)}
        </div>
    )
}

export default TaskList;