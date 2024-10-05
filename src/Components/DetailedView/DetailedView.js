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
        return (
            <main className='all-news-main'>
                <h2 className='no-articles-found-message'>No articles found for the selected date.</h2>
            </main>
        );
    }

    const isImageValid = newsArticle.urlToImage && newsArticle.urlToImage.trim() !== '';
    const isAuthorValid = newsArticle.author && newsArticle.author.trim() !== '';

    return (
        <main className='main-detailed-view'>
            <div className='detailed-view-article'>
                <div className='detailed-view-button-wrapper'>
                    <button onClick={() => navigate('/')}>All Articles</button>
                    <a href={newsArticle.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='detailed-view-source'>{newsArticle.source.name}</a>
                </div>
                <h2 className='detailed-view-title'>{newsArticle.title}</h2>
                {isImageValid && (
                    <img src={newsArticle.urlToImage} alt={'News article image'} className='detailed-view-image' />
                )}
                <div className='detailed-view-author-wrapper'>
                    <div className='detailed-view-date'>{moment(newsArticle.publishedAt).format('LLLL')}</div>
                    {isAuthorValid && (
                        <div className='detailed-view-author'>By: {newsArticle.author}</div>
                    )}
                </div>
                <p>{newsArticle.content}</p>
            </div>
        </main>
    )
}

export default DetailedView