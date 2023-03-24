import React from 'react';
import {content} from "../Data/spam"

const Spam1 = () => {
    console.log(content);
    return (
        <div className='h'>
        <h2>{content[0].mId}</h2>
        <h4>{content[0].subject}</h4>
         <p>{content[0].content}</p>
    </div>
    );
}

export default Spam1;
