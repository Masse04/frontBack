import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTasks, delTasks, filterTasks, getTasks } from "../Redux/Reducer/TaskReducer";
import { nTask } from "../Class/Class";
const Task = () => {
    const [Task,setTask] = useState(new nTask());
    const dispatch = useDispatch() ;
    const id = JSON.parse(localStorage.getItem('user')) ;
    useEffect(() => {
    dispatch(getTasks({id : id._id}))
  },[dispatch])
  const Tasks = useSelector(state => state.Tasks.list)
  return (
    <div>
        <input type = 'text' placeholder = 'filtre' onChange={(e) => {dispatch(filterTasks(e.target.value))}}/>
        <input type = 'text' placeholder = 'tache' onChange = { (e) => {setTask({...Task,task : e.target.value,user : id._id})}}/>
        <button onClick={ () => dispatch(addTasks({tache : Task}))}>addTasks</button>
      {
        Tasks.map(el => (
          <div className="Task">
            <div>
            <input type = 'checkbox' />
            </div>
            <h5>{el.task}</h5>
            <button onClick={ () => dispatch(delTasks({task : el.task,id : id._id}))}>delete</button>
          </div>
        ))
      }
    </div>
  )
}
export default Task ;