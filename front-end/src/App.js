import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import nTask from './Class/Class';
import { getTasks,addTasks, delTasks } from './Redux/Reducer/Reducer';

function App() {
  const [Task,setTask] = useState(new nTask());
  const dispatch = useDispatch() ;
  useEffect(() => {
    dispatch(getTasks())
  },[])
  const Tasks = useSelector(state => state.Tasks.list)
  console.log(Tasks)
  return (
    <div className="App">
      <input type = 'text' placeholder = 'tache' onChange = { (e) => {setTask({...Task,task : e.target.value})}}/>
      <button onClick={ () => dispatch(addTasks({task : Task}))}>addTasks</button>

      {
        Tasks.map(el => (
          <div>
            <h5>{el.task}</h5>
            <button onClick={ () => dispatch(delTasks({task : el.task}))}>delete</button>
          </div>
        ))
      }
      
    </div>
  );
}

export default App;
