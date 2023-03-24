import React from 'react';
import {content} from "../Data/delete"

const Delete1 = () => {
    return (
        <div>
             <h2>{content[0].mId}</h2>
            <h4>{content[0].subject}</h4>
             <p>{content[0].content}</p>
        </div>
    );
}

export default Delete1;
