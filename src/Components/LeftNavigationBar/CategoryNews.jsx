import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(data);

    const [news, setNews] = useState([]);

    useEffect(() => {
        if (id.toString() === '0') {
            setNews(data);
            return;
        }
        else if (id.toString() === '1') {
            const breakingNews = data.filter((news) =>
                news.others.is_today_pick === true)
            setNews(breakingNews);
            return;
        }
        else {
            const filteredNews = data.filter((news) => news.category_id.toString() === id.toString())
            setNews(filteredNews);
        }
    }, [data, id])


    console.log(news);
    return (
        <div className='grid grid-cols-1 gap-6'>
            <h2 className='text-base font-semibold p-4'>
                Total <span className='text-secondary'>
                    {news.length}
                </span> News Found!
            </h2>
            {
                news.map((news) => {
                    return <NewsCard
                        news={news}
                        key={news.id}></NewsCard>
                })
            }
        </div>
    );
};

export default CategoryNews;