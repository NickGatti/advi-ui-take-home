import { useEffect } from "react"

const NewsCard = ({ article } ) => {

    useEffect(() => {
        //console.log('article', article)
    }, [])

    /*
    { 
    addDate, articleId, authorsByline,
    categories, claim, clusterId,
    companies, content, country,
    description, entities, imageUrl,
    keywords, labels, language,
    links, locations, matchedAuthors,
    medium, people, places,
    pubDate, refreshDate, reprint,
    reprintGroupId, score, sentiment,
    source, summary, title,
    topics, translation, url,
    verdict }
    */
    
    //NOTE THESE: title, summary, url, sentiment (popularity), imageUrl, pubDate

    return (
        <div className='card'>
            <div className='divider'>
                <h4>{article.title}</h4>
                <p>{Date(article.pubDate).toString()}</p>
                {/* <p>{article.sentiment}</p> */}
                <p>{article.url}</p>
            </div>
            <img className='cardImage' src={article.imageUrl} alt={article.summary} />
        </div>
    )
}

export default NewsCard
