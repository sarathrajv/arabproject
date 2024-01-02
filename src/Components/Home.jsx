import React from 'react'
import '../Components/home.css'

import arrowdown from './Assets/arrow.png'
import flower from './Assets/rose.png'
import picon from './Assets/pimg.png'
import bell from './Assets/bell.png'
import plus from './Assets/plus.png'
import Slidenav from './Sidenav/Slidenav'
import Map1 from './Map1/Map1'
import Map2 from './Map2/Map2'



const Home = () => {
  return (
    <div className='home'>
         <div className="first">
            
            <div className="p-div">
               <img  src={picon} alt="" srcset="" />
            </div>
            
            <div className="tab">
               <div className="scroll-data">
                  <img  src={flower} alt="" srcset="" />
                  <span >x Enterprises Pvt. Ltd</span>
               </div>
               <div className="scroll-arrow">
                  <img  src={arrowdown} alt="" srcset="" />
               </div>
            </div>
         </div>
        
         <div className="second">
         <Slidenav/>
            
         <div className="properties">
            <Map1/>
            <Map2/>  
          
         </div>   

      
            
        <div className="notifi">
         <div className="notification">
         <div className="notification-bell">
                  <img  style={{width:"20px" , height:"20px"}} src={bell} alt="" srcset="" />
               </div>

         <div className="notification-plus">
                  <img  style={{width:"28px" , height:"28px"}} src={plus} alt="" srcset="" />
         </div>
         </div>
         </div>
         </div>

       
         
    </div>
  )
}

export default Home