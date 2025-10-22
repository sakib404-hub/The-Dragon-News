import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import LatestNews from '../Components/LatestNews/LatestNews';
import Navbar from '../Components/Navbar/Navbar';
import LeftNavigationBar from '../Components/LeftNavigationBar/LeftNavigationBar';
import RightNavigationBar from '../Components/RightNavigationBar/RightNavigationBar';
import Loader from '../Components/Loader/Loader';

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
            <main className='min-h-screen border w-11/12 mx-auto
            grid grid-cols-12 gap-2 p-4 my-10'>
                <aside className='col-span-3'>
                    <Suspense fallback={<Loader></Loader>}>
                        <LeftNavigationBar></LeftNavigationBar>
                    </Suspense>
                </aside>
                <div className='col-span-6 border'>
                    <Outlet></Outlet>
                </div>
                <aside className='col-span-3'>
                    <RightNavigationBar></RightNavigationBar>
                </aside>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;