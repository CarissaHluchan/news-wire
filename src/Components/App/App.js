import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// import Form from '../Form/Form';
import AllNewsView from '../AllNewsView/AllNewsView';
// import DetailedView from '../DetailedView/DetailedView';
// import ErrorPage from '../ErrorPage/ErrorPage';
import './App.css';
import mockData from '../../mockData.json'

function App() {
const [allNews, setAllNews] = useState([]);

useEffect(() => {
  setAllNews(mockData.articles)
},[])

  return (
    <div className="App">
      <header>
        <h1>News Wire</h1>
        {/* <Form /> */}
      </header>
      <Routes>
        <Route path='/' element={<AllNewsView allNews={allNews}/>}/>
        {/* <Route path='article/:publishedAt'element={<DetailedView />}/> */}
        {/* <Route path='/error/:code' element={<ErrorPage />}></Route>
        <Route path='*' element={<ErrorPage error={404} />}></Route> */}
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
