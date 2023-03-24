import React from 'react';
import{ content} from "../../Data/custom"
import {Link} from "react-router-dom"
import "../inbox.css"
const Custom = () => {
    return (
        <div className='hed20'>
           {
            content.map((item)=>{
                return(
                    <>
                    <Link to="/1custom" className='li'>
                 <div className='name'>{item.mId}</div>
                 <div className='subj'>{item.subject}</div>
                 </Link>
                 <br />
                    </>
                )
            })
         }
        </div>
    );
}

export default Custom;
