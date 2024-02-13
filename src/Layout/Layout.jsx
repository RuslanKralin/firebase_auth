import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import { Footer } from '../components/footer';
import './style.css';

function Layout() {
    return (
        <div className="container">
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;