import { useState, useEffect } from 'react'

import './App.css';

import NewsCardSection from './components/newsCard/NewsCardSection';
import Search from './components/search/Search'


function App() {
  const [news, setNews] = useState([])
  const [searchTerm, setSearchTerm] = useState('apple stock')

  // useEffect(() => {
  //   //USE FOR DEV - Requires backend server running
  //   //DO NOT USE THIS CODEBLOCK WITH NPM START in FRONTEND-NEWS
  //   fetch('dev/news')
  //     .then(res => res.json())
  //     .then(res => {
  //       if (Array.isArray(res) && res.length > 0) {
  //         setNews(res)
  //         console.log('Welcome!!!')
  //       } else {
  //         console.error('Error on fetch articles.')
  //       }
  //     }).catch(console.error)
  // }, [])

  useEffect(() => {
    fetch(`https://api.goperigon.com/v1/all?apiKey=3ed563b6-40ba-481c-a717-8a9fcae60c8f&q="${searchTerm}"`)
      .then(res => {
        return res.json()
      })
      .then(({articles}) => {
        if (Array.isArray(articles) && articles.length > 0) {
          setNews(articles)
          console.log('Welcome!!!')
        } else {
          console.error('Error on fetch articles.')
        }
      }).catch(console.error)
  }, [searchTerm])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Artichoke News</h1>
      </header>
      <Search setSearchTerm={setSearchTerm} />
      <NewsCardSection news={news} setNews={setNews} />
    </div>
  );
}

export default App;
