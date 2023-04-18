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
        // console.log('sentiment', sentiment)
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
            <div className="cardPadding">
                <div className='divider'>
                    <h4 className="cardTitle">{title}</h4>
                    <p className="cardDate">{new Date(pubDate).toString()}</p>
                    {summary ? <p className="cardSummary">{summary}</p> : null}
                    <a className="cardAnchor" href={url}>{url}</a>
                </div>
                <img className='cardImage' src={imageUrl} alt={title} />
            </div>
        </div>
    )
}

export default NewsCard
