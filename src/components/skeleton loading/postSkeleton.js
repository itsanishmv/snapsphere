import React from 'react'
import Skeleton from "react-loading-skeleton"
import  './postSkeleton.css'

const PostSkeleton = () => {
    return (
        <div className="post__wrapper">
             <div className="post__header">
             <Skeleton delay={0.5} className="skel__dp" circle={true} height={50} width={ 50}/>
               
                <Skeleton className="skel__header" width={100} count={1}/>
            </div>
            <div className="post__image">
               
                <Skeleton className="skel__image"height={500} width={580}count ={1}/>
            </div>
            <h5 className="post__caption">
                <Skeleton className="skel__caption1" width={100}count={1} />
                <Skeleton className="skel__caption2" width={ 400}count={1}/>
                
            </h5>
            <div className="post__commented">
                
            </div>
        </div>
    )
}
export default PostSkeleton;