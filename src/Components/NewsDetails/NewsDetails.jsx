import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../Header/Header';
import RightNavigationBar from '../RightNavigationBar/RightNavigationBar';
import NewsDetailsCard from './NewsDetailsCard';

const NewsDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [news, setNews] = useState(null);

    console.log(data);
    console.log(id);

    // const newsDetails = data.find(n => n.id.toString() === id.toString());
    // setNews(newsDetails)

    useEffect(() => {
        const newsDetails = data.find(n => n.id.toString() === id.toString());
        setNews(newsDetails)

    }, [data, id])
    // console.log(news);
    // console.log(news.author.img);
    // console.log(news.thumbnail_url);
    return (
        <div>
            <header
                className='mt-5'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto
            grid grid-cols-12'>
                <section className='col-span-9 p-5 space-y-5'>
                    <h2 className='text-2xl font-semibold'>News Details</h2>
                    {news ? (
                        <NewsDetailsCard news={news} />
                    ) : (
                        <div>Loading news details...</div>
                    )}
                </section>
                <aside className='col-span-3'>
                    <RightNavigationBar></RightNavigationBar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;