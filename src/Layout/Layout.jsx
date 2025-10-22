import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <header className='my-10 flex items-center justify-center'>
                <Header></Header>
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