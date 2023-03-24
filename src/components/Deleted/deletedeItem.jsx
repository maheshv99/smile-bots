import React from 'react';
import{ content} from "../../Data/delete"
import {Link} from "react-router-dom"
import "../inbox.css"
const DeletedeItem = () => {
    return (
        <div className='hed20'>
           {
            content.map((item)=>{
                return(
                    <>
                    <Link to="/1delete" className='li'>
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

export default DeletedeItem;
