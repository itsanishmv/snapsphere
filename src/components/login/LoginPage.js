import React from 'react'
import './loginPage.css';
import { useState} from 'react';

import { auth } from '../firebase'
import { Link } from 'react-router-dom';
import Feed from '../feed/Feed'





const LoginPage = () => {
  
 
  const [Email, setEmail] = useState("")
 
  const [Password, setPassword] = useState("")
  const [cred,setCred] = useState('')
  const [error , setError] =useState("")
  const isInvalid = Email === "" || Password === ""

  
  const logIn =async (event) => {
   
    event.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(Email, Password)
        .then((UserCredentials) => {
          setError('')
          console.log(UserCredentials.user)
          setCred(UserCredentials.user)
         
        })
        
    }
       catch (error) {
          
         setError(error.message)
         setEmail("")
         setPassword("")
        }  
 
  }
  
  return (
    <div>
      
      {cred ?
        <Feed /> :
        
    
        <div className="login__wrapper">
        
          <div className="login__image">
            <img className="iphone" src="./iphone-with-profile.jpg" alt="iphone " />
          </div>
          <div className="right__form">

            <form className="login__form" >
              <img className="insta__logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="insta logo" />
              {error && <p className="error__message">{error}</p>}
              <input className="name" type="text" placeholder="enter Email" value={Email} onChange={(e) => { setEmail(e.target.value) }} />
              <input className="password" type="password" placeholder="enter passsword" value={Password} onChange={(e) => { setPassword(e.target.value) }} />
             
              <button disabled={isInvalid} className="login__button" type="submit" onClick={logIn} > login</button>
             
            </form>
            <div className="login__signup">
              <p className="login__text">dont have an account?{
                <Link style={{textDecoration:"none",fontWeight:"600",color:"#0095F7"}} className="link__signup" to="/signup"> Sign Up </Link>
              }</p>
            </div>
          </div>
        </div>
      }
       

    </div>
      
   
    
  
  )
}

  export default LoginPage;
