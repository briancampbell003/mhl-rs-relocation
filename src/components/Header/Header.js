import React from 'react';
import Navigation from './Navigation';
import mainLogo from '../../assets/main-logo.jpg';


function Header({ currentPage, handlePageChange }) {
    return (
      <div>
        <img class="mhl-corner-logo" src={mainLogo} alt="MHL logo" width="375" height="90"></img>
        
        <div className="header">
            <a
              href="#home"
              onClick={() => handlePageChange('Home')}
            >
              RESIDENTS SERVICES RESYNDICATION GUIDE
            </a>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
          </div>
      </div>
      );
}

export default Header;
