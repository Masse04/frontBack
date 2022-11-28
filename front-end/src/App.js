import './App.css';
import LogIn from './Composant/LogIn';
import SignIn from './Composant/SignIn';
import {BrowserRouter,Routes,Route} from 'react-router-dom' ;
import Navbar from './Composant/Navbar';
import Task from './Composant/Task';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = '/' element = {<LogIn/>}/>
          <Route path = '/signin' element = {<SignIn/>} />
          <Route path = '/tasks' element = {<Task/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
