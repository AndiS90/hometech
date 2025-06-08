import React, { useState } from 'react'


import Header from './Header';
import Home from './pages/Home';
//import About from './pages/About';
//import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Misc from './pages/Misc';
import Networking from './pages/Networking';
import TVAudio  from './pages/TVAudio';
import Security from './pages/Security';
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './pages/assets/css/root.scss'
import './pages/assets/css/Reset.CSS'



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About/>;
    }
    if (currentPage === 'Networking') {
      return <Networking/>;
    }
    if(currentPage === 'TVAudio'){
      return <TVAudio/>;
    } 
    if (currentPage === 'Security') {
      return <Security/>;
    }
    if (currentPage === 'Misc') {
      return <Misc/>;
    }
    if(currentPage === 'Contact'){
      return <Contact/>;  
  }};

  const handlePageChange = (page) => setCurrentPage(page);

  return (
   <div className="outeristdiv">
    <div className="hero">
      <h2 className="tagline">Tech Made Simple, Homes Made Smarter</h2>

    </div>

      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer/>
    </div>
   
  );
};
