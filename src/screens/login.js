import React,{useState ,useContext} from "react";
import { GlobalContext } from "../context/context";
import { Link ,useHistory } from "react-router-dom";
import './login.css'


export default function Login() {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[emailError,setEmailError] = useState('');
    const[passwordError,setPasswordError] = useState('');

    let history = useHistory();

    const { state, dispatch } = useContext(GlobalContext);

    const checkUser = (x) => {
        let userData = state.users
        userData.forEach((a) =>{
            if(a.email === x.email && a.password === x.password){
                console.log("User Verified");
                dispatch({ type: "LOGIN_USER", payload: a });
                if(a.role === "teacher"){
                    history.push("/studtable")
                    console.log("Hello")
                }else if(a.role === "student"){
                    history.push("/studdetails")
                    console.log("Hello")
                }
            }
        }
        )
    }
    
    return(
        <div id="login">
            <h2>Login</h2>
            <br/>
            Email : <input type="email" value={email} placeholder="Enter Your Email" onChange={(a)=>{setEmail(a.target.value)}}/>
            <span>{emailError}</span>
            <br />
            Password : <input type="password" value={password} placeholder="Enter Your Password" onChange={(a)=>{setPassword(a.target.value)}}/>
            <span>{passwordError}</span>
            <br/>
            <button id="btn-1" onClick={()=>{
                if(email === ""){
                    setEmailError('Enter Email')
                }
                else if(password === ""){
                    setPasswordError('Enter Password')
                }
                else if (email !== "" && password !== ""){
                    let user = {email,password}
                checkUser(user)
                }
            }}>Submit</button>
            <br />
            <h5>Click here to <Link to="/">SignUp</Link></h5>
        </div>
    )
}