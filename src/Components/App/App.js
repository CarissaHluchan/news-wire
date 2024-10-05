import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Form from '../Form/Form';
import AllNewsView from '../AllNewsView/AllNewsView';
import DetailedView from '../DetailedView/DetailedView';
import ErrorPage from '../ErrorPage/ErrorPage';
import './App.css';
import mockData from '../../mockData.json';

function App() {
  const [allNews, setAllNews] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState(allNews);

  useEffect(() => {
    setAllNews(mockData.articles);
    setFilteredArticles(mockData.articles);
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
