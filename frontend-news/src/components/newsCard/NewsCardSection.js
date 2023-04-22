import { useState, useEffect  } from 'react'

import NewsCards from './NewsCards'
import Button from '../Button'
import Categories from '../categories/Categories'

const NewsCardSection = ({ news, setNews }) => {
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
        const categoryOutput = []
        for (let i = 0; i < news.length; i++) {
            if (news[i].categories.length === 0 && !categoryOutput.includes('*Uncategorized*')) {
                categoryOutput.push('*Uncategorized*')
            } else {
                for (let z = 0; z < news[i].categories.length; z++) {
                    if (!categoryOutput.includes(news[i].categories[z].name)) {
                        categoryOutput.push(news[i].categories[z].name)
                    }
                }
            }
        }

        setCategories(categoryOutput)
    }, [news])

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
    }, [currentPageNumber, filteredNews])

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

            if (article.categories.length === 0 && checkedCategories.includes('*Uncategorized*')) {
                return true
            }
            return false
        })])
    }, [checkedCategories, news])

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
        <section className='cardSection'>
            <Button click={handleSortByPopularity}>By popularity {sortByPopularity ? '↓' : '↑'}</Button>
            <Button click={handleSortByDate}>By date {sortByDate ? '↓' : '↑'}</Button>
            <Categories categories={categories} checkedCategories={checkedCategories} setCheckedCategories={setCheckedCategories} />
            {page && Array.isArray(page) ? <NewsCards news={page} /> : null}
            <div className='backNextButtonContainer'>
                <Button click={handleBack} disabled={backDisabled}>Back</Button>
                <Button click={handleNext} disabled={nextDisabled}>Next</Button>
            </div>
        </section>
    )
}

export default NewsCardSection
