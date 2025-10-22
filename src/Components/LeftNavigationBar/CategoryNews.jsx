import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
        <div>
            This is the Category News{id}!
        </div>
    );
};

export default CategoryNews;