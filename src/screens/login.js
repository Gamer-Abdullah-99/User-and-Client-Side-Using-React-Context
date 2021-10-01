import React,{useState ,useContext} from "react";
import { GlobalContext } from "../context/context";
import './login.css'


export default function Login() {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[emailError,setEmailError] = useState('');
    const[passwordError,setPasswordError] = useState('');

    const { state, dispatch } = useContext(GlobalContext);

    const checkUser = (x) => {
        let userData = state.users
        userData.map((a)=> {
            if(a.email === x.email && a.password === x.password){
                console.log("User Verified");
                dispatch({ type: "LOGIN_USER", payload: a });
            }
        })
      };
    
    return(
        <div id="login">
            <h2>Login</h2>
            <br/>
            Email : <input type="email" value={email} onChange={(a)=>{setEmail(a.target.value)}}/>
            <span>{emailError}</span>
            <br />
            Password : <input type="password" value={password} onChange={(a)=>{setPassword(a.target.value)}}/>
            <span>{passwordError}</span>
            <br/>
            <button onClick={()=>{
                if(email === ""){
                    setEmailError('Enter Email')
                }
                else if(password === ""){
                    setPasswordError('Enter Password')
                }
                else{
                    let user = {email,password}
                checkUser(user)
                }
            }}>Submit</button>
        </div>
    )
}