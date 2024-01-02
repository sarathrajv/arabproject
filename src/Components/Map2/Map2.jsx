import React from 'react'
import arrow from '../Assets/right-arrow.png'
import user from '../Assets/user.png'
import cloud from '../Assets/cloud-computing.png'
import email from '../Assets/envelope.png'
import data from '../Data'
import tick from '../Assets/double-tick.png'
import '../Map2/Map2.css'

const Map2 = () => {
  return (

    <div className="section2">
    {data.slice(3,5).map((item,index)=>{
          const getStartClass1 = `getstart1 getstart1-${index + 1}`;
          const spanClass1 = `spanClass spanClass-${index + 1}`;
         return(
      <div className="mapdiv2" key={index}>
        <div className="item1">
        <div className={spanClass1}>
             <span>{item.title}</span>
         </div>
         <h4 style={{fontWeight:600,}}>{item.head}</h4>
         <span >{item.paragraph}</span>
         <div className={getStartClass1}>
             <span>{item.get}</span><img src={arrow} alt="" srcset="" />
         </div>
         </div>
         <div className="item2">
         <h5 style={{fontSize:"11px",fontWeight:600,}}>What you'll get:</h5>
          <div className="mapcontent">
             <img src={user} alt="" srcset="" />
             <span>{item.userdata}</span>
          </div>
          {item.clouddata ? (
          <div className="mapcontent">
             <img src={cloud} alt="" srcset="" />
             <span>{item.clouddata}</span>
          </div>) : <div></div>}
          {item.emaildata ? (
          <div className="mapcontent">
             <img src={email} alt="" srcset="" />
             <span>{item.emaildata}</span>
          </div>):<div></div>}
          <div className="mapcontent">
             <img src={tick} alt="" srcset="" />
             <span>{item.doubleTick}</span>
          </div>
          </div>
          
      </div>
)})}
     
    </div> 
  )
}

export default Map2

