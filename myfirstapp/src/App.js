import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from './components/taskList';
import AddTask from './components/addTask';
function App() {
  const taskSlices=useSelector(state=>state.taskSlices)
 console.log("taskslices in the app ",taskSlices);
 
  // add a task fonction
  const Dispatch=useDispatch()
  return (
    <div className="App">
      <  AddTask />
    <TaskList/>
    </div>
  );
}

export default App;
