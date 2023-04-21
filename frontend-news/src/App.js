import { useState, useEffect } from 'react'

import './App.css';

import NewsCardSection from './components/newsCard/NewsCardSection';
import Search from './components/search/Search'


function App() {
  const [news, setNews] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // useEffect(() => {
  //   //USE FOR DEV

  //   //TODO: add *uncategorized* category, add search for API query

  //   fetch('dev/news')
  //     .then(res => res.json())
  //     .then(res => {
  //       if (Array.isArray(res) && res.length > 0) {
  //         setNews(res)
  //         console.log('Welcome!!!')
  //       } else {
  //         console.error('Error on 200 line 20 App.js')
  //       }
  //     }).catch(console.error)
  // }, [])

  useEffect(() => {
    // CODE CLEANUP BETTER CSS THEN SOLUTIONS.MD THEN SCHEDULE TIME
    fetch(`https://api.goperigon.com/v1/all?apiKey=3ed563b6-40ba-481c-a717-8a9fcae60c8f&q="${searchTerm ? searchTerm : 'Elon Musk'}"`)
      .then(res => {
        return res.json()
      })
      .then(({articles}) => {
        if (Array.isArray(articles) && articles.length > 0) {
          setNews(articles)
          console.log('Welcome!!!')
        } else {
          console.error('Error on 200 line 20 App.js')
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
