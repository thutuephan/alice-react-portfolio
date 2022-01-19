import React from 'react';


function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <a
                href='#home'
                onClick={() => handlePageChange('Home')}
                // This is a conditional (ternary) operator that checks to see if the current page is 'Home 
                // If it is, we set the current page to 'nav-link'
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </a>

            </li>
            <li className='nav-item'>
                <a
                    href='#about'
                    onClick={() => handlePageChange('About')}

                    // check the state of the current page like above
                    className={currentPage === 'About' ?'nav-link active' : 'nav-link'}                
                >
                    About
                </a>

            </li>
            <li className='nav-item'>
                <a
                    href='#works'
                    onClick={() => handlePageChange('Works')}

                    // check the state of the current page like above
                    className={currentPage === 'Works' ?'nav-link active' : 'nav-link'}                
                >
                    Works
                </a>

            </li>
            <li className='nav-item'>
                <a
                    href='#contact'
                    onClick={() => handlePageChange('Contact')}

                    // check the state of the current page like above
                    className={currentPage === 'Contact' ?'nav-link active' : 'nav-link'}                
                >
                    Contact
                </a>

            </li>
            
        </ul>
    )
}

export default Navigation
