import { useEffect } from "react"

const NewsCard = ({ article: {
    title,
    pubDate,
    sentiment,
    url,
    summary,
    imageUrl,
} } ) => {

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
                <h4>{title}</h4>
                <p>{Date(pubDate).toString()}</p>
                {/* <p>{sentiment}</p> */}
                <p>{url}</p>
            </div>
            <img className='cardImage' src={imageUrl} alt={summary} />
        </div>
    )
}

export default NewsCard
