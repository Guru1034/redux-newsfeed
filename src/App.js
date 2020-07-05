import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Topbar from './layouts/Topbar';
import Sidebar from './layouts/Sidebar';
import Footer from './layouts/Footer';
import News from './components/News';

import service from './services';
import {useDispatch} from 'react-redux';
import {headlinesSearchAction} from './actions';

function App() {

  const [showHamburger, setHam] = useState(false);
  const dispatch = useDispatch();
  const sideBarRef = useRef();
  console.log('Sidebar ref is', sideBarRef);

  function toggleHamburger( val ){
    if(val){
      sideBarRef.current.classList.add('show')
    }else{
      sideBarRef.current.classList.remove('show')
    }
    setHam(val);
  }

  useEffect( ()=>{
    service.getTopHeadlines().then(res=>{
        console.log('Articles in appJs are', res)
        dispatch(headlinesSearchAction(res ? res : []));
    })
  },[]);

  return (
          <div className="main-container">
            <div className="topbar-style"><Topbar toggle={toggleHamburger} showHamburger={showHamburger}/></div>
            <div className="sidebar-style" ref={sideBarRef}><Sidebar toggle={toggleHamburger} showHamburger={showHamburger}/></div>
            <div className="content-style" ><News/></div>
            <div className="footer-style"><Footer/></div>
          </div>
  );
}

export default App;
