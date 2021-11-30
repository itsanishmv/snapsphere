import React, { useState ,useEffect, useContext} from 'react'
import { auth } from '../firebase'
import LoginPage from '../login/LoginPage'
import ImageUpload from '../upload/ImageUpload'
import './navigation.css'
import { Link} from 'react-router-dom'
import { createdContext } from '../ContextApi'




const Nav = () => {
  console.log("nav re-rendering")
   const {cancelUpload,setCancelUpload} = useContext(createdContext)
    
    const [user, setUser] = useState('')
    
    const[logout,setLogout] = useState('')
    const Logout = () => {
      setLogout(auth.signOut())
      auth.signOut()
      
    }
   
  useEffect(() => {
    //authentication 
    const Unsubscribe = auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        
        setUser(authuser)

      } else {
        setUser('')
      }
    })
    return () => {
      Unsubscribe()
    }
  }, [user])
  
  

    return (
        <div>
        {logout ?
         <LoginPage/>
          :
          <div className="app-header">
              
            <img className="insta-logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="insta" />
            <input type="search" className="search" placeholder="search.." />

            <div className="icons__wrap">
              
                  <Link className="link__feed"to="/Feed">
                    <svg aria-label="Home" className="icon__home " fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>
                  </Link>

                  
                  <svg onClick={() => { setCancelUpload(!cancelUpload) }} aria-label="New Post" className="icon__upload "  height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M43.9 4c-2.5-2.4-5.5-4-12.2-4H16.2C9.6 0 6.6 1.6 4 4.1 1.6 6.6 0 9.6 0 16.2v15.5c0 6.6 1.6 9.7 4.1 12.2 2.5 2.4 5.5 4 12.2 4h15.5c6.6 0 9.7-1.6 12.2-4.1 2.4-2.5 4-5.5 4-12.2V16.2c0-6.6-1.6-9.6-4.1-12.2zm-7.6 21.5H25.5v10.8c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h10.8V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v10.8h10.8c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path></svg>
                  
                  <Link to="/Dashboard">
                    <svg aria-label="Profile" className="profile__icon " fill="#262626" height="16" role="img" viewBox="0 0 32 32" width="16"><path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path></svg>
                  </Link>
            
             <Link to ="/"><button className="logout__button" onClick={Logout}>Logout</button></Link> 
              
            </div> 
            <div className="mobile__chin__nav">
              
                  <Link className="link__feed"to="/Feed">
                    <svg aria-label="Home" className="icon__home " fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>
                  </Link>

                  
                  <svg onClick={() => { setCancelUpload(!cancelUpload) }} aria-label="New Post" className="icon__upload "  height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M43.9 4c-2.5-2.4-5.5-4-12.2-4H16.2C9.6 0 6.6 1.6 4 4.1 1.6 6.6 0 9.6 0 16.2v15.5c0 6.6 1.6 9.7 4.1 12.2 2.5 2.4 5.5 4 12.2 4h15.5c6.6 0 9.7-1.6 12.2-4.1 2.4-2.5 4-5.5 4-12.2V16.2c0-6.6-1.6-9.6-4.1-12.2zm-7.6 21.5H25.5v10.8c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h10.8V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v10.8h10.8c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path></svg>
                  
                  <Link to="/Dashboard">
                    <svg aria-label="Profile" className="profile__icon " fill="#262626" height="16" role="img" viewBox="0 0 32 32" width="16"><path d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path></svg>
                  </Link>

              
            </div>
            <div className="mobile__logout">
               <Link to ="/"><button className="logout__button" onClick={Logout}>Logout</button></Link> 
            </div>
          </div>
        }
        <div className="imageupload__box">
          {/* toggle when clicked on the upload button + */}
              {!cancelUpload ? ""
            :
            
            user.displayName ? (
              <ImageUpload username={user.displayName} />
                  
            ) : (
              <h1>Log in to upload</h1>
            )
            }
           </div>
              

        </div>
    )
}
export default Nav;