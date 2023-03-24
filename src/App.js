import './App.css';
import React from 'react';
import Rightbar from './components/LastBar/rightbar';
import Midlebar from './components/MiddleBar/midlebar';
import Sidebar from './components/sidebar/sidebar';
import Topbar from './components/Topbar/topbar';
import "./style.css"
import {Routes,Route} from 'react-router-dom'
import Inbox from './components/inbox';
import Spam from './components/SpamBar/spam';
import Deleteditem from './components/Deleted/deletedeItem';
import Custom from './components/CustomeNav/custom';
import Inbox1 from './InnerContent/inbox1';
import Custome1 from './InnerContent/custome1';
import Spam1 from './InnerContent/spam1';
import Delete1 from './InnerContent/delete1';

function App() {
  return (
    <div className="App">
      <div>
           <Topbar/>
      </div>
   
      <div className='container1'>
        <div>
        <Sidebar/>
        </div>

        <div className='mid'>
          {/* <Midlebar/> */}
          <Routes>
                <Route path='/' element={<Midlebar/>}/>
                <Route path="/inbox" element={<Inbox/>}/>
                <Route path="/spam" element={<Spam/>}/>
                <Route path="/delete" element={<Deleteditem/>}/>
                <Route path="/custom" element={<Custom/>}/>
            </Routes>
        </div>

        <div className='last'>
          {/* <Rightbar/> */}
          <Routes>
               <Route path="/" element={<Rightbar/>}/>
                <Route path="/1inbox" element={<Inbox1/>}/>
                <Route path="/1spam" element={<Spam1/>}/>
                <Route path="/1delete" element={<Delete1/>}/>
                <Route path="/1custom" element={<Custome1/>}/>
            </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
