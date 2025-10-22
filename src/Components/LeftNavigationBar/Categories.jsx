import React from 'react';
import { NavLink } from 'react-router';

const Categories = ({ category }) => {

    return (
        <NavLink
            className={'btn bg-base-100 border-0 hover:bg-base-200 nav-link2 font-semibold'}
            key={category.id}
            to={`/category/${category.id}`
            }>
            {category.name}
        </NavLink >
    );
};

export default Categories;