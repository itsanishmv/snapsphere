import React from 'react'
import './Tick.css'
const Tick = () => {
    return (
        <div>
           
                <div className="animation-ctn">
                    <div className="icon icon--order-success svg">
                        <svg style={{width:"100px", height:"100px"}} >
                            <g fill="none" stroke="#22AE73" stroke-width="2">
                                <circle cx="50" cy="50" r="40" style={{ strokeDasharray:"480px 480px" ,strokeDashoffset: "960px"}}></circle>
                                <circle id="colored" fill="#fff " cx="50" cy="50" r="40" style={{ strokeDasharray:"480px 480px", strokeDashoffset: "960px"}}></circle>
                                <polyline className="st0" stroke="#22AE73" stroke-width="3" points="43.5,77.8 63.7,97 120.4,40 " style={{strokeDasharray:"92px " ,strokeDashoffset: "200px"}} />
                            </g>
                        </svg>
                    </div>
                </div>

        </div>
    )
}
export default Tick;