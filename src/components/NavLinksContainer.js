import React, { useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import Home from './Home';
import General from './pages/General';
import Before from './pages/Before';
import During from './pages/During';
import After from './pages/After';

export default function NavLinksContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Determine page to render passed on the value of currentPage
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'General') {
      return <General />;
    }
    if (currentPage === 'Before') {
      return <Before />;
    }
    if (currentPage === 'During') {
      return <During />;
    }
    if (currentPage === 'After') {
      return <After />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div className="page-frame">
      < Header currentPage={ currentPage } handlePageChange={ handlePageChange } />
          { renderPage() }
      < Footer />
    </div>
  );
}
