import React, {useContext,useEffect,useRef, useState } from 'react'
import './dashboard.css'
import Nav from '../nav bar/navigation'

import { createdContext } from '../ContextApi'


const Dashboard = () => {
    const { user, posts } = useContext(createdContext)
    const [num , setNum] = useState()
    const el = useRef([])

    useEffect(() => {
        setNum(el.current.children.length)
        console.log("running")
    },[posts])
    
    return (
        <div className="background">
            
            <Nav />
            
            {!user ? "nothing"
                :
            
                <div className="profile__wrap">
                   
                    
                    <div className="details">
                        <img className="user__image" src="./user.png" alt="user dp" />
                        
                        <div className="profile__name">
                            <p className="name__dashboard">{user.displayName}</p>
                        </div>

                        <div className="profile__details">
                            <h5 className="no__posts">{num} posts</h5>
                            <h5 className="no__followers">1m followers</h5>
                            <h5 className="no__following">500 following</h5>
                        </div>
                    </div>
                    
                    <br />
                    
                    <div ref={el} className="gallery__wrap">
                        {   
                            posts.map(({post}) => (
                                
                                post.username === user.displayName && <img className="image1" src={post.imageUrl} alt="pic" />
                            )
                            )
                         }
                    </div>
    
                </div>
            }
        </div>
     )
}
 
export default Dashboard;