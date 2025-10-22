import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const { id } = useParams();
    return (
        <div>
            This is the Category News{id}!
        </div>
    );
};

export default CategoryNews;