import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a
          href="#general"
          onClick={() => handlePageChange('General')}
          className={currentPage === 'General' ? 'nav-link active' : 'nav-link'}
        >
          General
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#before"
          onClick={() => handlePageChange('Before')}
          className={currentPage === 'Before' ? 'nav-link active' : 'nav-link'}
        >
          Before
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#during"
          onClick={() => handlePageChange('During')}
          className={currentPage === 'During' ? 'nav-link active' : 'nav-link'}
        >
          During
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#after"
          onClick={() => handlePageChange('After')}
          className={currentPage === 'After' ? 'nav-link active' : 'nav-link'}
        >
          After
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
