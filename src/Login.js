import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const navigate = useNavigate();


    const [user,setUser] = useState({
        email : "",
        password : ""

})

    const handleChange = e =>{
        const {name,value} = e.target;
        console.log(name,value)

        setUser({
            ...user,
            [name]:value
        })
    }
    const login =()=>{
        axios.post("",user)
        // .then(res=>
        //     alert(res.data.message)
        // )
        // if(user.data === user._id){
        //     navigate('/home')
        // }
        
        .then((res)=>{
            console.log(res)
            // if(user.data === user._id){
            //     alert(res.data.message)
            //     navigate('/home')  
            // }
        })
        // .catch((err)=>{
        //     console.log(err)
        //     alert('invalid input')
        //     if(user.data === user._id){
        //         alert(res.data.message)
        //         // navigate('/')  
        //     }
        //     // if(err.user.data != user._id){
        //     //     alert(res.data.message)
        //     // }
        // })
    
    }
    

  return (
    <>
    <div className="reg">
      <div className="navbar_text sticky ">
      </div>
        <div className="logo" onClick={()=>{navigate('/main')}}>
         
            <img
              src="https://www.logo.wine/a/logo/SpaceX/SpaceX-Logo.wine.svg"
              alt="SpaceX Logo"onClick={()=>{navigate('/main')}}
            />
          </div>
        </div>
        <div className="container1">
        <div className="head1">
    <div className='login'>
        <h3>First Login the page</h3>
      <input type="text" name="email" user={user.email} placeholder='Enter your E-mail' onChange={handleChange} />
      <input type="password" name="password" user={user.password} placeholder='Enter your Password' onChange={handleChange} />
      <div className='button' onClick={login}>Login</div>
      <div>or</div>
      <div className='button' onClick={()=>{navigate('/register')}}>Register</div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Login
