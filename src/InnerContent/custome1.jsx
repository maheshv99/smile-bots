import React from 'react';
import {content} from "../Data/custom"

const Custome1 = () => {
    return (
        <div>
            <h2>{content[0].mId}</h2>
            <h4>{content[0].subject}</h4>
             <p>{content[0].content}</p>
        </div>
    );
}

export default Custome1;
