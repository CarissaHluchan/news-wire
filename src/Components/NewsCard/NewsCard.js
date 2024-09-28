import React from 'react'

import './NewsCard.css'

function NewsCard({ id, source, title, image, description, date }) {

    return (
        <div className='news-card-wrapper' id={id}>
            <div className='new-card-source-wrapper'>
                <div>{source}</div>
            </div>
            <h2>{title}</h2>
            <img src={image} className='news-card-image' />
            <p>{description}</p>
            <div className='new-card-source-wrapper'>
                <div>{date}</div>
            </div>
        </div>
    )
}

export default NewsCard