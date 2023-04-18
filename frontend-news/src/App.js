import { useState, useEffect } from 'react'

import './App.css';

import NewsCardSection from './components/newsCard/NewsCardSection';

function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    //USE FOR DEV
    fetch('dev/news')
      .then(res => res.json())
      .then(res => {
        if (Array.isArray(res) && res.length > 0) {
          setNews(res)
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
