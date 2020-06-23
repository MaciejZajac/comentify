import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ theme, toggleTheme, children }) {
    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            {children}
            <Footer theme={theme} />
        </>
    );
}
