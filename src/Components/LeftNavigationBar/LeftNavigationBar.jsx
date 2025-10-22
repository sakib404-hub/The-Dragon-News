import React, { useEffect, useState } from 'react';
import Categories from './Categories';

const LeftNavigationBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await fetch('/categories.json');
            const data = await res.json();
            setCategories(data);
        }
        fetchCategories();
    }, [])
    console.log(categories);
    return (
        <div className='p-2'>
            <h2 className='text-xl font-semibold'>All Categories({categories.length})</h2>
            <div className='grid grid-cols-1 gap-2 mt-5'>
                {
                    categories.map((category) => {
                        return <Categories category={category}></Categories>
                    })
                }
            </div>
        </div>
    );
};

export default LeftNavigationBar;