// import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';

import './DetailedView.css';

function DetailedView({ allNews }) {
    const { publishedAt } = useParams();
    const navigate = useNavigate();

    const newsArticle = allNews.find(article => {
        const formattedPublishedAt = moment(article.publishedAt).format('YYYY-MM-DD-HH-mm-ss');
        return formattedPublishedAt === publishedAt;
    })

    if (!newsArticle) {
        return <div>Article not found</div>;
    }

    return (
        <main className='main-detailed-view'>
            <div className='detailed-view-article'>
                <div className='detailed-view-button-wrapper'>
                    <button onClick={() => navigate('/')}>All Articles</button>
                    <div className='detailed-view-source'>{newsArticle.source.name}</div>
                </div>
                <h2 className='detailed-view-title'>{newsArticle.title}</h2>
                <img src={newsArticle.urlToImage} alt={newsArticle.imageDescription || 'News article image'} className='detailed-view-image'/>
                <div className='detailed-view-author-wrapper'>
                    <div className='detailed-view-date'>{moment(newsArticle.publishedAt).format('LLLL')}</div>
                    <div className='detailed-view-author'>By: {newsArticle.author}</div>
                </div>
                <p>{newsArticle.content}</p>
            </div>
        </main>
    )
}

export default DetailedView