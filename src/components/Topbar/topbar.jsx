import React from 'react';
import './topbar.css';
import icon_menu from "../../images/circled-menu.png"

const Topbar = () => {
    return (
        <div className='container'>
            <div className='flex-container'>
                <div>
                   <img src={icon_menu} alt="menu" width="30px"/>
                </div>
                <div>
                    <span>Outlook Mail</span>
                </div>
                
            </div>
        </div>
    );
}

export default Topbar;
