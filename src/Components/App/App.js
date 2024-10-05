import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import moment from 'moment';

import Form from '../Form/Form';
import AllNewsView from '../AllNewsView/AllNewsView';
import DetailedView from '../DetailedView/DetailedView';
import ErrorPage from '../ErrorPage/ErrorPage';
import './App.css';
import mockData from '../../mockData.json';

function App() {
  const [allNews, setAllNews] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState(allNews);

  // const newsArticleId = allNews.publishedAt

  useEffect(() => {
    setAllNews(mockData.articles);
    setFilteredArticles(mockData.articles);
  }, [])

  // const { control, handleSubmit } = useForm();

  const handleSearch = (searchDate) => {
    // If the searchDate is null or undefined, show all articles
    if (!searchDate) {
        setFilteredArticles(allNews);
        return;
    }

    const formattedSearchDate = searchDate.toISOString().slice(0, 10); // Format search date as YYYY-MM-DD

    // Filter the articles based on the search date
    const filtered = allNews.filter(article => {
        const articleDate = article.publishedAt.slice(0, 10); // Extract the date portion of publishedAt
        return articleDate === formattedSearchDate;
    });

    setFilteredArticles(filtered); // Update the filteredNews state with the filtered articles
};



  // const handleSearch = (searchDate) => {
  //   const searchMoment = moment(searchDate); 
  //   const formattedSearchDate = searchMoment.format('MM/DD/YYYY');

  //   // console.log(formattedSearchDate, '<< Search Date')

  //   const filtered = allNews.filter(article => {
  //     const publishedDate = moment(article.publishedAt).format('MM/DD/YYYY');

  //     // console.log(publishedDate, '<< published date');

  //     return publishedDate === formattedSearchDate;
  //   });
  
  //   // console.log(filtered, '<< Filtered Articles');

  //   setFilteredArticles(filtered);
  // }

  // const onSearchSubmit = (data) => {
  //   // Handle search logic here using data.searchDate
  //   console.log('Search date:', data.searchDate);
  //   // You can filter the articles based on the selected date here.
  //   // For example:
  //   const filteredArticles = allNews.filter(article => moment(article.publishedAt).isSame(data.searchDate, 'day'));
  //   console.log('Filtered Articles:', filteredArticles);
  // };

  return (
    <div>
      <header>
        <h1>News Wire</h1>
        <Form handleSearch={handleSearch} />
      </header>
      <Routes>
        <Route path='/' element={<AllNewsView allNews={filteredArticles ? filteredArticles : allNews}/>} />
        <Route path='article/:publishedAt' element={<DetailedView allNews={allNews} />} />
        <Route path='/error/:code' element={<ErrorPage />}></Route>
        <Route path='*' element={<ErrorPage error={404} />}></Route>
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
