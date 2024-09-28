import React from 'react'

import './NewsCard.css'

function NewsCard({ id, source, title, image, description, date, author }) {

    return (
        <div className='news-card-wrapper'>
            <div className='new-card-source-wrapper'>
                <div>{source}</div>
            </div>
            <h2>{title}</h2>
            <img src={image} className='news-card-image' />
            <p>{description}</p>
            <div className='news-card-date'>{date}</div>
            <div className='news-card-author'>By: {author}</div>
        </div>
    )
}

export default NewsCard