import React,{useState ,useContext} from "react";
import { GlobalContext } from "../context/context";
import './signup.css'

export default function Signup() {
    const[username,setUsername] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[role,setRole] = useState('');
    const[usernameError,setUsernameError] = useState('');
    const[emailError,setEmailError] = useState('');
    const[passwordError,setPasswordError] = useState('');
    const[roleError,setRoleError] = useState('');

    const { state, dispatch } = useContext(GlobalContext);

    const addUser = (a) => {
        console.log("newuser", a);
        dispatch({ type: "SIGNUP_USER", payload: a });
      };
    
    return(
        <div id="signup">
            <h2>Sign Up</h2>
            <br />
            Username : <br/><input type="text" value={username} onChange={(a)=>{setUsername(a.target.value)}} className="dataFields" placeholder="Enter Your Username"/>
            <span>{usernameError}</span>
            <br />
            Email : <br/><input type="email" value={email} onChange={(a)=>{setEmail(a.target.value)}} className="dataFields" placeholder="Enter Your Email"/>
            <span>{emailError}</span>
            <br />
            Password : <br/><input type="password" value={password} onChange={(a)=>{setPassword(a.target.value)}} className="dataFields" placeholder="Enter Your Password"/>
            <span>{passwordError}</span>
            <br />
            Role : 
            
            <label><input type="radio" value="Teacher" name="role" onChange={(a)=>{setRole(a.target.value)}}/>Teacher </label>
            <label><input type="radio" value="Student" name="role" onChange={(a)=>{setRole(a.target.value)}}/>Student </label>
            <span>{roleError}</span>
            <br/>
            <button onClick={()=>{
                if(username === ""){
                    setUsernameError('Enter User Name')
                }
                else if(email === ""){
                    setEmailError('Enter Email')
                }
                else if(password === ""){
                    setPasswordError('Enter Password')
                }
                else if(role === ""){
                    setRoleError('Select Role')
                }
                else{
                    let newUserObj = {
                        username,email,password,role
                    }
                    addUser(newUserObj)
                }
            }}>Submit</button>
        </div>
    )
}
