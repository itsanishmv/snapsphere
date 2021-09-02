import {auth,db} from './firebase'
import React, { createContext } from 'react'
import { useState, useEffect } from 'react'

export const createdContext = createContext()


const ContextApi = ( props ) => {
    
  const [user ,setUser] = useState([])
  const [posts, setPost] = useState([])
  const [cancelUpload, setCancelUpload] = useState('')
  
    useEffect(() => {
  
      db.collection('posts').orderBy("Timestamp","desc").onSnapshot(snapshot => {
        setPost(snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data()
          
        })))
        
    })
   
    }, [])
  
    useEffect(() => {
        //authentication 
        const Unsubscribe = auth.onAuthStateChanged((authuser) => {
          if (authuser) {
            
            setUser(authuser)
    
          } else {
            setUser('')
          }
        })
    
      return () => Unsubscribe()
      
      }, [user])
    
  
    
    return (
      <createdContext.Provider value={{posts, user, cancelUpload, setCancelUpload }}>
            {props.children}
      </createdContext.Provider>
    )
}

export default ContextApi;