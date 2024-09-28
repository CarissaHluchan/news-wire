import React from 'react';
import moment from 'moment';

import NewsCard from '../NewsCard/NewsCard';
import './AllNewsView.css'

function AllNewsView({ allNews }) {
    const allNewsCards = allNews
    .filter(newsItem => newsItem.title !== '[Removed]')
    .map(newsItem => {
        return (
            <NewsCard
                id={newsItem.publishedAt}
                key={newsItem.publishedAt}
                source={newsItem.source.name || ''}
                title={newsItem.title || ''}
                image={newsItem.urlToImage || ''}
                description={newsItem.description || ''}
                author={newsItem.author || ''}
                date={moment(newsItem.publishedAt).startOf('day').fromNow() || ''}
            />
        )
    })

    return (
        <main className='all-news-main'>
            {allNewsCards}
        </main>
    )
}

export default AllNewsView