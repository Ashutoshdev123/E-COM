import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassord] = useState("");
    const navigate = useNavigate(); 
   
     useEffect(()=>{
        const auth = localStorage.getItem("user");
         if (auth) {
             navigate('/');
         }
      },[]);
   

     const handleLogin = async () => {
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body: JSON.stringify({email,password}),
            headers: {
                           'Content-Type': 'application/json'
            }
          });         
          result = await result.json();
         // console.log(result);
          if(result.auth){           
            localStorage.setItem("user",JSON.stringify(result.user));
            localStorage.setItem("token",JSON.stringify(result.auth));
            navigate('/');
          }
          else{
             alert(result);
          }
        }       // console.log(email, password);
     

    return (
    <div>
        <form className="form-container">
                <h2>Login</h2>             

                <div>
                    <input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                </div>

                <div>
                    <input type="password" placeholder="Enter Password" onChange={(e)=>setPassord(e.target.value)} value={password} />
                </div>

                <button type="button" onClick={handleLogin}>Login</button>
            </form>
    </div>
    )

}

export default Login;