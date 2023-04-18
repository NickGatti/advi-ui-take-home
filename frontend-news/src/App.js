import { useState, useEffect  } from 'react'

import NewsCards from './components/newsCard/NewsCards'
import Button from './components/Button'
import Categories from './components/categories/Categories'

import './App.css';

function App() {
  const [news, setNews] = useState([])
  const [filteredNews, setFilteredNews] = useState([])
  const [page, setPage] = useState([])
  const [categories, setCategories] = useState([])
  const [backDisabled, setBackDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)
  const [sortByPopularity, setSortByPopularity] = useState(false)
  const [sortByDate, setSortByDate] = useState(false)
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [checkedCategories, setCheckedCategories] = useState([])

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

    if (Array.isArray(filteredNews) && filteredNews.length > 0 && currentPageNumber + 4 >= filteredNews.length) {
      setNextDisabled(true)
    } else {
      setNextDisabled(false)
    }

    setPage(filteredNews.map(ele => ele).splice(currentPageNumber - 1, currentPageNumber + 4))
  }, [currentPageNumber, filteredNews, news])

  useEffect(() => {
    const categorieOutput = []
    for (let i = 0; i < news.length; i++) {
      for (let z = 0; z < news[i].categories.length; z++) {
        if (!categorieOutput.includes(news[i].categories[z].name)) {
          categorieOutput.push(news[i].categories[z].name)
        }
      }
    }

    setCategories(categorieOutput)
  }, [news])

  useEffect(() => {
    setCheckedCategories([...categories])
  }, [categories])

  useEffect(() => {
    setFilteredNews([...news.filter(article => {
      const articleCategories = article.categories.map(ele => ele.name)
      
      for (let i = 0; i < checkedCategories.length; i++) {
        if (articleCategories.includes(checkedCategories[i])) {
          return true
        }
      }
      return false
    })])
  }, [checkedCategories])

  const handleBack = () => {
    if (currentPageNumber !== 1 || currentPageNumber > 1) {
      setCurrentPageNumber(currentPageNumber - 5)
    }
  }

  const handleNext = () => {
    setCurrentPageNumber(currentPageNumber + 5)
  }

  const handleSortByPopularity = () => {
    if (sortByPopularity) {
      setSortByPopularity(false)
      setNews([...news].sort((a, b) => b.sentiment.positive - a.sentiment.positive))
    } else {
      setSortByPopularity(true)
      setNews([...news].sort((a, b) => a.sentiment.positive - b.sentiment.positive))
    }
  }

  const handleSortByDate = () => {
    if (sortByDate) {
      setSortByDate(false)
      setNews([...news].sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)))
    } else {
      setSortByDate(true)
      setNews([...news].sort((a, b) => new Date(a.pubDate) - new Date(b.pubDate)))
    }    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Artichoke News</h1>
      </header>
      <section className='cardSection'>
      {/* NEXT UP CLEAN UP CARD, REFACTOR CODE, CLEAN CSS, BETTER CSS */}
        <Button click={handleSortByPopularity}>By popularity { sortByPopularity ? '↓' : '↑'}</Button>
        <Button click={handleSortByDate}>By date { sortByDate ? '↓' : '↑'}</Button>
        <Categories categories={categories} checkedCategories={checkedCategories} setCheckedCategories={setCheckedCategories} />
        {page && Array.isArray(page) ? <NewsCards news={page}/> : null}
        <div className='backNextButtonContainer'>
          <Button click={handleBack} disabled={backDisabled}>Back</Button>
          <Button click={handleNext} disabled={nextDisabled}>Next</Button>
        </div>
      </section>
    </div>
  );
}

export default App;
