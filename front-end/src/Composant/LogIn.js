import { Client } from "../Class/Class";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/Reducer/UserReducer";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
    const [client, setclient] = useState(new Client()) ;
    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;
    const selector = useSelector(state => state.Users.status)
    const Redirect = async () => {
        let result = await dispatch(getUser({user : client}))
        if(typeof result.payload === 'object')
            navigate('/tasks') ;
    }
  return (
    <div>
        <h5>LogIn</h5>
        <div className="form">
            <input type = 'text' placeholder = 'username' onChange={(e) => setclient({...client,username : e.target.value})} />
            <input type = 'password' placeholder = '********' onChange={(e) => setclient({...client,password : e.target.value})} />
            <button className = "bg-thirth" onClick={Redirect}>Envoyer</button>
        </div>
    </div>
  )
}
export default LogIn ;