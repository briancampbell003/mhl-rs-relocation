import React from 'react';
import Navigation from './Navigation';
import mainLogo from '../../assets/main-logo-trans.png';


function Header({ currentPage, handlePageChange }) {
    return (
      <div>
        <img className="mhl-corner-logo" src={mainLogo} alt="MHL logo" width="250" height="60"></img>
        
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
