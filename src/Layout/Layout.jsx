import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import LatestNews from '../Components/LatestNews/LatestNews';
import Navbar from '../Components/Navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <header className='my-10 flex space-y-6 flex-col'>
                <Header></Header>
                <LatestNews></LatestNews>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='min-h-screen border'>
                <section className='left-nav'></section>
                <Outlet></Outlet>
                <section className='right-nav'></section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;