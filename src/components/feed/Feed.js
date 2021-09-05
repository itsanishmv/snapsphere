import React from 'react'
import './Feed.css';
import Posts from '../posts/posts'
import { useContext} from 'react';
import Avatar from '@material-ui/core/Avatar'
import Nav from '../nav bar/navigation';
import LoginPage from '../login/LoginPage';
import { Link } from 'react-router-dom'
import { createdContext } from '../ContextApi';
import Skeleton from 'react-loading-skeleton';


const Feed = () => {
  console.log("feed re-rendering")
 //context api 
  const { user, posts } = useContext(createdContext)
  
  return (
    <div >
      
      {!user.displayName ? <LoginPage /> :
        
        <div className="App">
          <Nav />
            
          <div className="post__imgupload__wrap">
          
            <div className="app__posts">
                
                
              {
                posts.map(({ post, id }) => {
                      
                  return (
                    <div key={id}>
                      <Posts totallikes={post.likes}  postId={id} username={post.username} imageurl={post} caption={post} />
                    </div>
                   
                  )
                })
              }
              
            </div>
           
            

           
            <div className="suggestions">
              {!user.displayName ? <Skeleton count={1} height={100} width={300} />
                :
                <div className="header__suggestions">
               
                  <Avatar className="post__avatar" alt="" src="static/images/avatar/1.jpg" />
                  <h5 className="suggestions__username"><Link to="/Dashboard" style={{ textDecoration: "none", color: 'black' }}>{user.displayName}</Link> </h5>
                  <h5 className="suggestions__switch">Switch</h5>
                  <h5 className="suggestions__suggestions">Suggestions for you</h5>
                  
              
                </div>
              }
              <div className="suggestion__list">
                <div className="list1">

                  <Avatar className="post__avatar__list" alt="" src="static/images/avatar/1.jpg" />
                  <h5 className="username__list__username">username</h5>
                  <h5 className="username__list__follow">Follow</h5>
                  
                </div>
              
              </div>
              
            </div>

          </div>
        </div>
      }
  </div>
  )
}

export default Feed;