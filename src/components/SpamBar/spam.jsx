import React from 'react';
import{ content} from "../../Data/spam"
import {Link} from "react-router-dom"
import "../inbox.css"
const Spam = () => {
    return (
        <div className='hed20'>
           {
            content.map((item)=>{
                return(
                    <>
                    <Link to="/1spam" className='li'>
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

export default Spam;
