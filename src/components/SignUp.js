import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");
  const navigate = useNavigate(); 

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate('/');
    }
  });

  const collectuserdata = async ()=>{
    //console.log(name,email,password)
    let result = await fetch('http://localhost:5000/register',{
      method:'post',
      body: JSON.stringify({name,email,password}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    localStorage.setItem("user",JSON.stringify(result.result));
    localStorage.setItem("token",JSON.stringify(result.auth));
   // console.log(result);
    if(result.result && result.auth){
        navigate("/login");
    }
  }

    return (

        <div>
            <form className="form-container">
                <h2>Register</h2>

                <div>
                    <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} value={name} required />
                </div>

                <div>
                    <input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} value={email} required />
                </div>

                <div>
                    <input type="password" placeholder="Enter Password" onChange={(e)=>setPassord(e.target.value)} value={password} required />
                </div>

                <button type="button" onClick={collectuserdata}>Sign Up</button>
            </form>

        </div>
    )
}

export default SignUp;