import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
    return (
        <div className="header">
          {/* <h1 className="header-mhl-title">RESIDENTS SERVICES RESYNDICATION GUIDE</h1> */}
            <a
            href="#home"
            onClick={() => handlePageChange('Home')}
          >
            RESIDENTS SERVICES RESYNDICATION GUIDE
          </a>
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      );
}

export default Header;
