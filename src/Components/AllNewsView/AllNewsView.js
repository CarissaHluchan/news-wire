import React from 'react';
import moment from 'moment';

import NewsCard from '../NewsCard/NewsCard';
import './AllNewsView.css';

function AllNewsView({ allNews }) {
    if (!allNews || allNews.length === 0) {
        return (
            <main className='all-news-main'>
                <h2 className='no-articles-found-message'>No articles found for the selected date.</h2>
            </main>
        );
    }

    const allNewsCards = allNews
        .filter(newsItem => newsItem.title !== '[Removed]')
        .map(newsItem => {
            const formattedDate = moment(newsItem.publishedAt).format('YYYY-MM-DD-HH-mm-ss');
            return (
                <NewsCard
                    id={formattedDate}
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