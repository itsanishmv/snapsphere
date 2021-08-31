import React, { useContext, useEffect, useRef, useState } from 'react'
import './posts.css'
import Avatar from '@material-ui/core/Avatar'
import { db } from './firebase'
import firebase from 'firebase'
import PostSkeleton from './postSkeleton';
import { createdContext } from './counterContext'


const Posts = ({  totallikes, postId, username, caption, imageurl }) => {
    //here "user" is the logged in user and "username" is the person who uploaded the post 
    
    const { user } = useContext(createdContext)
    const [ postload,setPostload] = useState()
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const [checkingUser, setCheckingUser] = useState(totallikes.includes(user.displayName))
    const commentInput = useRef()
    
    
    const handleComment = () => commentInput.current.focus()
        
    const handleLikes = () => { 
        setCheckingUser(!checkingUser)
        db.collection("posts").doc(postId).update({
            likes: checkingUser ? firebase.firestore.FieldValue.arrayRemove(user.displayName) : firebase.firestore.FieldValue.arrayUnion(user.displayName),
            toggle: checkingUser
        })
               
    }

         
    const deletePhoto = () => {
        db.collection("posts").doc(postId).delete().then(() => {
            console.log("Document successfully deleted!");
            }).catch((error) => {
            console.error("Error removing document: ", error);
            });
        }
    
    useEffect(() => {

        setTimeout(() => {
            db.collection("posts").onSnapshot(snapshot => {
                setPostload(snapshot.docs.map(doc=>doc.data()))
                })
            },2000)
         
        }, [])
        
    useEffect(() => {
        //for comment section UI
     
         
        var unsubscribe
        
            if (postId) {
                unsubscribe = db
                    .collection("posts")
                    .doc(postId)
                    .collection("comments")
                    .onSnapshot((snapshot) => {
                        setComments(snapshot.docs.map((doc) => ({
                            commentId: doc.id,   
                        }                         
                        )))
                    
                    })
            }
            
            return () => {
                unsubscribe()
            }
        
          
           
    
    }, [postId])

    const postComment = (event) => {
        event.preventDefault();
        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            
        })
        setComment('')
    }
    
  
   

    return (
        <div>
            {!postload ? <PostSkeleton />
                :
                <div className="post-wrapper">
                
                    <div className="post-header">
                        <Avatar className="post-avatar" alt="" src="static/images/avatar/1.jpg" />
                        <h4 className="post__username">{username}</h4>
                
                        <div className="deletebtn__wrap">
                            {user.displayName === username && <button className="deletebtn" onClick={deletePhoto}>Delete</button>}
                        </div>
                    </div>
                
                
                    <img className="post-image" src={imageurl.imageUrl} alt="" />
                    
                    <div className="like__comment__share">
                        <svg onClick={handleLikes} aria-label="Like" class={checkingUser ? "like__btn " : "unlike__btn"} role="img" viewBox="1 0 48 52" ><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                        <svg onClick={handleComment} aria-label="Comment" class="comment__btn" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                        <svg aria-label="Share Post" class="share__btn " fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                
                        <div className="num__likes" >
                            {[totallikes.length] > 1 ? `${[totallikes.length]} likes` : `${[totallikes.length]} like`}
                        </div>
                    </div>
                        
                    <h5 className="post-caption"><strong>{username} </strong> {caption.caption}</h5>
            
             
                    
                    {/*comment section */}
          
                    <div className="post__commented">
                        {comments.map((comment) => (
                            <p>
                                <strong>  {comment.username}</strong> {comment.text}
                            </p>
                        ))}
                    </div>
                
                
                    {user && (
                        <form className="post__commentbox">
                            <input
                                ref={commentInput}
                                className="comment__input"
                                type="text"
                                placeholder="add a comment"
                                onChange={(e) => setComment(e.target.value)}
                                value={comment} />
                            <button
                                type="submit"
                                className="comment__button"
                                disabled={!comment}
                
                                onClick={postComment}
                            >Post</button>
                        </form>
             

                    )}
                       
            
                </div>
            }
   </div>
    )
}
export default Posts;