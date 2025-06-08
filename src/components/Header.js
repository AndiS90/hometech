import "./pages/assets/css/header.scss";
//import React, { useState } from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {
  return (
    
    <header>
      <div className="logocontainer">
        <div className="logo"></div>
      </div>
    <nav>      
    <label className="hamburger" for='menu' tabindex="0">☰
    </label>
    <input id='menu' type='checkbox' />
      
        <ul className="navlist">
          {/* <li className="" >
          
          <a href="#home" onClick={() => handlePageChange('Home')}         
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link' 
          >
          Home
          </a>
      </li> */}
          <li className="">
            <a
              href="#Home"
              onClick={() => handlePageChange("Home")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </a>
          </li>
          <li className="">
            <a
              href="#About"
              onClick={() => handlePageChange("About")}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li className="dropdown">
            <a
              href="#security"
              onClick={() => handlePageChange("Security")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Security" ? "nav-link active" : "nav-link"
              }
            >
             Smart Security
            </a>
            <div className="dropdown-content">
                <a href="#videodoorbell" onClick={() => handlePageChange("Videodoorbell")} className={currentPage === "Videodoorbell"? "nav-link active": "nav-link"}>
                  Video Doorbell
                </a>
                <a href="#wificamera" onClick={() => handlePageChange("Wificamera")} className={currentPage === "Wificamera"? "nav-link active": "nav-link"}>
                  Wifi Camera
                </a>
                <a href="#floodlightcamera" onClick={() => handlePageChange("Floodlightcamera")} className={currentPage === "Floodlightcamera"? "nav-link active": "nav-link"}>
                  Floodlight Camera
                </a>
                <a href="#smartlock" onClick={() => handlePageChange("Smartlock")} className={currentPage === "Smartlock"? "nav-link active": "nav-link"}>
                  Smart Lock
                </a>
                <a href="#smartthermostat" onClick={() => handlePageChange("Smartthermostat")} className={currentPage === "Smartthermostat"? "nav-link active": "nav-link"}>
                  Smart Thermostat
                </a>
                <a href="#smartplugslights" onClick={() => handlePageChange("Smartplughslights")} className={currentPage === "Smartplugslights"? "nav-link active": "nav-link"}>
                  Smart Plugs/Lights
                </a>
                 <a href="#smartasst" onClick={() => handlePageChange("Smartasst")} className={currentPage === "Smartasst"? "nav-link active": "nav-link"}>
                  Smart Assistant
                </a>
                <a href="#permextlight" onClick={() => handlePageChange("Permextlight")} className={currentPage === "Permextlight"? "nav-link active": "nav-link"}>
                  Permanent Ext. Lighting
                </a>
                 <a href="#poecamera" onClick={() => handlePageChange("Poecamera")} className={currentPage === "Poecamera"? "nav-link active": "nav-link"}>
                  POE Camera System
                </a>
                <a href="#diysecurity" onClick={() => handlePageChange("Diysecurity")} className={currentPage === "Diysecurity"? "nav-link active": "nav-link"}>
                  DIY Security System
                </a>
                <a href="#lockcamera" onClick={() => handlePageChange("Lockcamera")} className={currentPage === "Lockcamera"? "nav-link active": "nav-link"}>
                  Smartlock & Camera
                </a>
            </div>
          </li>
          <li className="dropdown">
            <a
              href="#networking"
              onClick={() => handlePageChange("Networking")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Networking" ? "nav-link active" : "nav-link"
              }
            >
              Networking
            </a>
            <div className="dropdown-content">
                <a href="#wifioptimization" onClick={() => handlePageChange("Wifioptimization")} className={currentPage === "Wifioptimization"? "nav-link active": "nav-link"}>
                  Wifi Optimization
                </a>
                <a href="#meshwifi" onClick={() => handlePageChange("Meshwifi")} className={currentPage === "Meshwifi"? "nav-link active": "nav-link"}>
                  Mesh Wifi 
                </a>
                <a href="#ethernet" onClick={() => handlePageChange("Ethernet")} className={currentPage === "Ethernet"? "nav-link active": "nav-link"}>
                  Ethernet
                </a>
               
            </div>
          </li>
          <li className="dropdown">
            <a
              href="#tvAudio"
              onClick={() => handlePageChange("TVAudio")}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "TVAudio" ? "nav-link active" : "nav-link"
              }
            >
              TV & Audio
            </a>

            <div className="dropdown-content">
               
                <a href="#" onClick={() => handlePageChange("")} className={currentPage === ""? "nav-link active": "nav-link"}>
                  TV Mounting
                </a>
                <a href="#" onClick={() => handlePageChange("")} className={currentPage === ""? "nav-link active": "nav-link"}>
                  Soundbar/Speakers
                </a>
                <a href="#" onClick={() => handlePageChange("")} className={currentPage === ""? "nav-link active": "nav-link"}>
                  Streaming Optimization
                </a>
                
            </div>
          </li>
          
          <li className="dropdown">
            <a
              href="#misc"
              onClick={() => handlePageChange("Misc")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Misc" ? "nav-link active" : "nav-link"
              }
            >
              Misc
            </a>

            <div className="dropdown-content">
                
                <a href="#pcbuild" onClick={() => handlePageChange("Pcbuild")} className={currentPage === "Pcbuild"? "nav-link active": "nav-link"}>
                  PC Build Only
                </a>
                <a href="#pcfull" onClick={() => handlePageChange("Pcfull")} className={currentPage === "Pcfull"? "nav-link active": "nav-link"}>
                  PC Full Service 
                </a>
                <a href="#troubleshooting" onClick={() => handlePageChange("Troubleshooting")} className={currentPage === "Troubleshooting"? "nav-link active": "nav-link"}>
                  Troubleshooting
                </a>
                <a href="#consultation" onClick={() => handlePageChange("Consultation")} className={currentPage === "Consultation"? "nav-link active": "nav-link"}>
                  Constultation
                </a>
                <a href="#tutorials" onClick={() => handlePageChange("Tutorials")} className={currentPage === "Tutorials"? "nav-link active": "nav-link"}>
                  Tutorials
                </a>
            </div>
          </li>
          <li className="">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
