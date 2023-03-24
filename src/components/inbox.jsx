import React from 'react';
import {Link} from "react-router-dom"
import{ content} from '../Data/inbox'
import "./inbox.css"

const Inbox = () => {
    return (
        <div className='hed20'>

         {
            content.map((item)=>{
                return(
                    <>
                    <Link to="/1inbox" className='li'>
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

export default Inbox;
