import React from 'react'
import arrow from '../Assets/right-arrow.png'
import user from '../Assets/user.png'
import cloud from '../Assets/cloud-computing.png'
import email from '../Assets/envelope.png'
import data from '../Data'
import '../Map1/Map1.css'

const Map1 = () => {
  return (
    <>
     <div className="header">
                 <span>Choose a plan that's just right for you !</span>
                 
                 <div className="selector">
                   <span>Monthly</span>
                   <span>Annually</span>
                 </div>
               </div>  

               <div className="section">
                {data.slice(0,3).map((item,index)=>{
                     const getStartClass = `getstart getstart-${index + 1}`;
                    return(
                 <div className="mapdiv" key={index}>
                  <div className='mapsubdiv'>
                    <h4 >{item.head}</h4>
                    <span style={{ position: 'relative', color: 'gray',fontSize:12 }}>
                    <span className='cash'></span>
                        {item.cash}</span>
                    <h3>{item.money}</h3> 
                    <div  className={getStartClass }  >
                        <span>Get Started</span><img src={arrow} alt="" srcset="" />
                    </div>
                    </div>

                    <hr className='line'/>
                    <h5 className='smallhead'>What you'll get:</h5>
                     <div className="mapcontent">
                        <img src={user} alt="" srcset="" />
                        <span>{item.userdata}</span>
                     </div>
                     <div className="mapcontent">
                        <img src={cloud} alt="" srcset="" />
                        <span>{item.clouddata}</span>
                     </div>
                     <div className="mapcontent">
                        <img src={email} alt="" srcset="" />
                        <span>{item.emaildata}</span>
                     </div>

                     <h6 style={{fontSize:13}}>EXPLORE FEARTURES</h6>
                 </div>
)})}
               </div> 
    </>
  )
}

export default Map1