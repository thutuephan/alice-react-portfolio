import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Works from './pages/Works';
import Footer from './Footer';
import Skills from './pages/Skills';

function PortfolioContainer() {

    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Works') {
            return <Works />;
        }
        if (currentPage === 'Skills') {
            return <Skills />
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* passing the currentPage from state and the function to update it*/}
            <Navigation currentPage={currentPage} 
                        handlePageChange={handlePageChange}
            />

            {/* Here we are calling the renderPage method which will return a component*/}
            {renderPage()}

            <Footer />
            
        </div>
    )
}

export default PortfolioContainer
