import { useState, useEffect  } from 'react'

import NewsCards from './components/newsCard/NewsCards'

import './App.css';

function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    //USE FOR DEV
    fetch('dev/news')
    .then(res => res.json())
    .then(res => {
      setNews(res)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Artichoke News</h1>
      </header>
      <section className='cardSection'>
        <NewsCards news={news} />
      </section>
    </div>
  );
}

export default App;
