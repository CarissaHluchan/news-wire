import React from 'react'
import { useNavigate } from 'react-router-dom'

import './NewsCard.css'

function NewsCard({ id, source, title, image, description, date }) {
    const navigate = useNavigate();

    const handleDetailedView = () => {
        navigate(`/article/${id}`)
    }

    return (
        <div className='news-card-wrapper' id={id} onClick={handleDetailedView}>
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