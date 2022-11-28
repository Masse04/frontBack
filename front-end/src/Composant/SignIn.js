import axios from "axios";
import { useState } from "react";
import { nUser } from "../Class/Class";

const SignIn = () => {
    const [user,setUser] = useState(new nUser()) ;
    const Api = () => {
        return axios
                .post('http://localhost:3002/Users/signIn',user)
                .then(res => console.log(res.data))
                .catch(err => err.data.message)
    }
  return (
    <div>
        <h5>SignIn</h5>
        <form>
            <input type = 'text' placeholder = 'NOM'onChange={ (e) => {setUser({...user,nom : e.target.value})}}/>
            <input type = 'text' placeholder = 'Prenom'onChange={ (e) => {setUser({...user,prenom : e.target.value})}}/>
            <input type = 'text' placeholder = 'Username'onChange={ (e) => {setUser({...user,username : e.target.value})}}/>
            <input type = 'email' placeholder = 'example@email.com'onChange={ (e) => {setUser({...user,email : e.target.value})}}/>
            <input type = 'password' placeholder = '*********'onChange={ (e) => {setUser({...user,password : e.target.value})}}/>
            <button onClick={Api}>envoyer</button>
        </form>
    </div>
  )
}

export default SignIn ;