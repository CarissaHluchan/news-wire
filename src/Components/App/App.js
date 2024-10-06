import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Form from '../Form/Form';
import AllNewsView from '../AllNewsView/AllNewsView';
import DetailedView from '../DetailedView/DetailedView';
import ErrorPage from '../ErrorPage/ErrorPage';
import './App.css';
import { getNews } from '../APICalls/APICalls';
// import mockData from '../../mockData.json';

function App() {
  const [allNews, setAllNews] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState(allNews);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        if (data && Array.isArray(data.articles)) {
          setAllNews(data.articles); // Set articles if they exist
          setFilteredArticles(data.articles); // Same for filteredArticles
        } else {
          throw new Error('Invalid data structure received from API.');
        }
      } catch (err) {
        console.error("Error fetching the News from App.js", err);
        navigate(`/error/${err.statusCode || 500}`, { state: { message: err.message || 'An unexpected error occurred.' } });
      }
    }
    fetchNews();
  }, []);

  const handleSearch = (searchDate) => {
    if (!searchDate) {
      setFilteredArticles(allNews);
      return;
    };

    const formattedSearchDate = searchDate.toISOString().slice(0, 10);
    const filtered = allNews.filter(article => {
      const articleDate = article.publishedAt.slice(0, 10);
      return articleDate === formattedSearchDate;
    });

    setFilteredArticles(filtered);
  };

  return (
    <div>
      <header>
        <h1>News Wire</h1>
        <Form handleSearch={handleSearch} />
      </header>
      <Routes>
        <Route path='/' element={<AllNewsView allNews={filteredArticles ? filteredArticles : allNews} />} />
        <Route path='article/:publishedAt' element={<DetailedView allNews={filteredArticles ? filteredArticles : allNews} />} />
        <Route path='/error/:code' element={<ErrorPage allNews={filteredArticles ? filteredArticles : allNews} />}></Route>
        <Route path='*' element={<ErrorPage error={404} allNews={filteredArticles ? filteredArticles : allNews} />}></Route>
      </Routes>
      <footer>
        <div>Created By: Carissa Hluchan</div>
        <a
          href="https://github.com/CarissaHluchan"
          target="_blank"
          rel="noopener noreferrer"
          className='url-link-github'
        >See it on: GitHub</a>
      </footer>
    </div>
  );
}

export default App;
