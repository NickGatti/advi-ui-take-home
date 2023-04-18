import { useState, useEffect } from 'react'

import './App.css';

import NewsCardSection from './components/newsCard/NewsCardSection';


function App() {
  const [news, setNews] = useState([])

  // useEffect(() => {
  //   //USE FOR DEV
  //   fetch('dev/news')
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res)
  //       if (Array.isArray(res) && res.length > 0) {
  //         setNews(res)
  //         console.log('Welcome!!!')
  //       } else {
  //         console.error('Error on 200 line 20 App.js')
  //       }
  //     }).catch(console.error)
  // }, [])

  useEffect(() => {
    //USE FOR DEV
    fetch('https://api.goperigon.com/v1/all?apiKey=3ed563b6-40ba-481c-a717-8a9fcae60c8f&q="Elon Musk"')
      .then(res => {
        return res.json()
      })
      .then(({articles}) => {
        console.log(articles)
        if (Array.isArray(articles) && articles.length > 0) {
          setNews(articles)
          console.log('Welcome!!!')
        } else {
          console.error('Error on 200 line 20 App.js')
        }
      }).catch(console.error)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Artichoke News</h1>
      </header>
      <NewsCardSection news={news} setNews={setNews} />
    </div>
  );
}

export default App;
