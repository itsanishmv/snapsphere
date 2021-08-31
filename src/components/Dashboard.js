import React, {useContext } from 'react'
import './dashboard.css'
import Nav from './navigation'

import { createdContext } from './counterContext'


const Dashboard = () => {
    const {user,posts} = useContext(createdContext)
    return (
        <div>
            
            <Nav />
            
            {!user ? "nothing"
                :
            
                <div className="profile__wrap">
                   
                    
                    <div className="details">
                        <img className="user__image" src="./user.png" alt="user dp" />
                        
                        <div className="profile__name">
                            <h5 className="name__dashboard">{user.displayName}</h5>
                        </div>

                        <div className="profile__details">
                            <h5 className="no__posts">1000 posts</h5>
                            <h5 className="no__followers">1m followers</h5>
                            <h5 className="no__following">500 following</h5>
                        </div>
                    </div>
                    
                    <br />
                    
                    <div className="gallery__wrap">
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