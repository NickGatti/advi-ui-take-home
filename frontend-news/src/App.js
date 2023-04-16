import { useState, useEffect  } from 'react'

import NewsCards from './components/newsCard/NewsCards'

import './App.css';

function App() {
  const [news, setNews] = useState([])
  const [page, setPage] = useState([])
  const [backDisabled, setBackDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)
  const [currentPageNumber, setCurrentPageNumber] = useState(1)

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

  useEffect(() => {
    if (currentPageNumber <= 1) {
      setBackDisabled(true)
    } else {
      setBackDisabled(false)
    }

    if (Array.isArray(news) && news.length > 0 && currentPageNumber + 4 >= news.length) {
      setNextDisabled(true)
    } else {
      setNextDisabled(false)
    }

    setPage(news.map(ele => ele).splice(currentPageNumber - 1, currentPageNumber + 4))
  }, [currentPageNumber, news])

  const handleBack = () => {
    if (currentPageNumber !== 1 || currentPageNumber > 1) {
      setCurrentPageNumber(currentPageNumber - 5)
    }
  }

  const handleNext = () => {
    setCurrentPageNumber(currentPageNumber + 5)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Artichoke News</h1>
      </header>
      <section className='cardSection'>
      {/* NEXT UP FILTER THE ARTICLES */}
        {page && Array.isArray(page) ? <NewsCards news={page}/> : null}
        <button className='button' onClick={handleBack} disabled={backDisabled}>Back</button>
        <button className='button' onClick={handleNext} disabled={nextDisabled}>Next</button>
      </section>
    </div>
  );
}

export default App;
