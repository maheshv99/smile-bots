import React,{useState} from 'react';
import "./sidebar.css"
import search_icon from "../../images/search-icon.png"
import sort_up from "../../images/sort-up-.png"
import sort_down from "../../images/sort-down.png"
import Navbar from '../NavBar/navbar';


const Sidebar = () => {
    const [showFolder,setShowFolder]=useState(false);
    return (
        <div className='long-box'>
            <div className='search-bar'>
                <input type="text" placeholder='Search Mail and People' />
                <img src={search_icon} alt=""/>

            </div>
         <div>
            
           <div className='folder-container'>
            <div className='fld'>
                <span className='img1'>
                    {
                    showFolder? <img src={sort_down} alt="imdd" width="20px" onClick={()=>{setShowFolder(!showFolder)}}/>:<img src={sort_up} alt="imdd" width="20px" onClick={()=>{setShowFolder(!showFolder)}}/>
                }
                </span>
                
                <span className='fld-name'>Folders</span>
                </div>
            <div className='inside-folder'>
               {
                showFolder? <Navbar/>:null
               }
            </div>
           </div>
         </div>
        </div>
    );
}

export default Sidebar;
