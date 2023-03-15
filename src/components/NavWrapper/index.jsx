import React, { useState } from 'react'
import './styles.css'
import { RxDashboard } from 'react-icons/rx';
import { BsFileEarmarkTextFill } from 'react-icons/bs';
import { RiWallet3Fill } from 'react-icons/ri';
import { MdInsertChart } from 'react-icons/md';
import { ImPhone } from 'react-icons/im';
import { IoMdList } from 'react-icons/io';


function NavBar({ children }) {
  const [activeTab, setActiveTab] = useState(window.location.pathname)
  const [displayNav, setDisplayNav] = useState(false)
    
  return (
    <div>
      {/* Navigation Bar */}
      <div className="nav_container">
        <p className="logo" >Paypay.</p>

        <div className='button_container' >
          <div className={`nav_button ${activeTab === "/dashboard" && 'active_nav_button'}`}>
            <RxDashboard style={{color: activeTab === "/dashboard" ? '#2A2795' : '#A0A2AD'}} />
            <p> Dashboard </p>
          </div>

          <div className={`nav_button ${ activeTab === "/" && 'active_nav_button'}`}>
            <BsFileEarmarkTextFill style={{color: activeTab === "/" ? '#2A2795' : '#A0A2AD'}} />
            <p> Invoices </p>
          </div>

          <div className={`nav_button ${activeTab === "/wallet" && 'active_nav_button'}`}>
            <RiWallet3Fill style={{color: activeTab === "/wallet" ? '#2A2795' : '#A0A2AD'}} />
            <p> Wallet </p>
          </div>

          <div className={`nav_button ${activeTab === "/activity" && 'active_nav_button'}`}>
            <MdInsertChart style={{color: activeTab === "/activity" ? '#2A2795' : '#A0A2AD'}} />
            <p> Activity </p>
          </div>
          <div className={`nav_button ${activeTab === "/help" && 'active_nav_button'}`}>
            <ImPhone style={{color: activeTab === "/help" ? '#2A2795' : '#A0A2AD'}} />
            <p> Help </p>
          </div>
        </div>

        <div className="mobile_nav_button">
          <IoMdList onClick={() => setDisplayNav(prev => !prev)} style={{fontSize: 30, cursor: 'pointer'}} />
        </div>
      </div>

            {/* Mobile Navigation Container */}
      {
        displayNav && (
          <div className='mobile_nav_container' >
            <div className={`nav_button ${activeTab === "/dashboard" && 'active_nav_button'}`}>
              <RxDashboard style={{color: activeTab === "/dashboard" ? 'white' : '#A0A2AD'}} />
              <p> Dashboard </p>
            </div>

            <div className={`nav_button ${ activeTab === "/" && 'active_nav_button'}`}>
              <BsFileEarmarkTextFill style={{color: activeTab === "/" ? 'white' : '#A0A2AD'}} />
              <p> Invoices </p>
            </div>

            <div className={`nav_button ${activeTab === "/wallet" && 'active_nav_button'}`}>
              <RiWallet3Fill style={{color: activeTab === "/wallet" ? 'white' : '#A0A2AD'}} />
              <p> Wallet </p>
            </div>

            <div className={`nav_button ${activeTab === "/activity" && 'active_nav_button'}`}>
              <MdInsertChart style={{color: activeTab === "/activity" ? 'white' : '#A0A2AD'}} />
              <p> Activity </p>
            </div>
            <div className={`nav_button ${activeTab === "/help" && 'active_nav_button'}`}>
              <ImPhone style={{color: activeTab === "/help" ? 'white' : '#A0A2AD'}} />
              <p> Help </p>
            </div>        
          </div>
        )
      }

      <div>
        {children}
      </div>
    </div>
  )
}

export default NavBar