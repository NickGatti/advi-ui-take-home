import { useEffect } from 'react'

import NewsCard from './NewsCard'

const NewsCards = ({ news }) => {

    useEffect(() => {
        //console.log('news', news)
    }, [])

    const newsCards = news.map((article, index) => {
        return (
            <NewsCard article={article} key={index} />
        )
    })

    return (
        <div className='cardContainer'>
            {newsCards}
        </div>
    )
}

export default NewsCards