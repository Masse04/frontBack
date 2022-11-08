import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getTasks,addTasks } from './Redux/Reducer/Reducer';

function App() {
  const dispatch = useDispatch() ;
  useEffect(() => {
    dispatch(getTasks())
  },[])
  const Tasks = useSelector(state => state.Tasks.list)
  console.log(Tasks)
  return (
    <div className="App">
      {
        Tasks.map(el => (
          <h5>{el.task}</h5>
        ))
      }
      <button onClick={ () => dispatch(addTasks())}>addTasks</button>
    </div>
  );
}

export default App;
