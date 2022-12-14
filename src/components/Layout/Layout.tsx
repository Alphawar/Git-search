import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom'; 

const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;