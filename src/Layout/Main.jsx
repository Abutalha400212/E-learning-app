import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;