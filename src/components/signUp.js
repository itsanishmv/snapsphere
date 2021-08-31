import React from 'react'
import './loginPage.css';
import { useState} from 'react';
import { auth } from './firebase'
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';



const signUp = () => {
  const [Email, setEmail] = useState('')
  const [Username,setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [error, setError] = useState("")
  const [user, setUser] = useState("")
 
  const createAccount = (event) => {
    event.preventDefault()
    
    auth.createUserWithEmailAndPassword(Email, Password)
      .then((authuser) => {
        authuser.user.updateProfile({
          displayName: Username
        })
       setUser(authuser.user)
      })
      .catch((error) => setError(error.message))
        setUsername("")
        setEmail("")
        setPassword("")
  }
  return (
    <div>
     
      
      {user ? 
        <LoginPage/>
        :
   
        <div className="login__wrapper">
      
        <div className="right__form">
         
          <form className="login__form" >
            <img className="insta__logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="insta logo" />
            {error && <p className="error__message">{error}</p>}
            <input className="name" type="text" placeholder="enter Email" value={Email} onChange ={(e)=>{setEmail(e.target.value)}} />
            <input className="name" type="text" placeholder="enter username" value={Username} onChange ={(e)=>{setUsername(e.target.value)}} />
            <input className="password" type="password" placeholder="enter passsword" value={Password} onChange={(e) => { setPassword(e.target.value) }} />
          
    
            <button  className="login__button" type="submit"  onClick={createAccount} > Sign up</button>
          
          </form>
          <div className="login__signup">
            <p className="signup__text"> Have an account?
              <Link style={{textDecoration:"none"}} className="link__login" to="/"> Log In </Link>
            </p>
          </div>
        </div>
        </div>
        
      }
     {user && ""}
  </div>
        
     
      
    
    )
}
export default signUp;