import React from 'react';
import Header from './Header';
import MidPage from '../MidPage';
import Endpage from './Endpage';
import RocketList from './RocketList';


const MainHead = () => {
  return (
    <div className='banner'>
     <Header/>
      <div className='banner_content'>
      
        <div className='container'>
            <div className='banner_text'>
            <h3>UPCOMING LAUNCH</h3>
            <h1>AX-2 MISSION</h1>
            <div className='banner_btn'>
            <button type="button" class="btn btn-smart"><a href='https://www.youtube.com/watch?v=F6WLkE-KoRc'>Watch</a></button>
            </div>
            </div>
        </div>
      </div>
      <RocketList/>
    <MidPage/>
   <Endpage/>
    </div>
  )
}

export default MainHead
