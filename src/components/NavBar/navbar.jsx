import React from 'react';
import {Link} from 'react-router-dom'
import "./nacbar.css"

const Navbar = () => {
    return (
        <div className='cont'>
           <Link to="/inbox">Inbox</Link><br />
           <Link to='/spam'>Spam</Link><br />
           <Link to='delete'>Deleted Items</Link><br />
           <Link to='custom'>Custom Folder</Link>
        </div>
    );
}

export default Navbar;
