import React from 'react';
import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-xl mx-auto p-4" >
            {/* Author Info */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                    <img
                        src={news.author.img}
                        alt={news.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-sm font-semibold">{news.author.name}</p>
                        <p className="text-xs text-gray-500">{new Date(news.author.published_date).toDateString()}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                    <FaBookmark className="cursor-pointer hover:text-blue-500" />
                    <FaShareAlt className="cursor-pointer hover:text-blue-500" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold px-4">{news.title}</h2>

            {/* Thumbnail */}
            <img
                src={news.thumbnail_url}
                alt={news.title}
                className="w-full h-48 object-cover my-3 rounded-2xl"
            />

            {/* Details */}
            <p className="text-sm text-gray-600 px-4 mb-3">
                {news.details.slice(0, 200)}...
                <span className="text-blue-500 cursor-pointer"> Read More</span>
            </p>

            {/* Tags */}
            <div className="px-4 mb-3 flex flex-wrap gap-2">
                {news.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Rating and Views */}
            <div className="flex items-center justify-between px-4 pb-4">
                <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm font-medium">{news.rating.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <FaEye />
                    <span className="text-sm">{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
