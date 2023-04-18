import { useEffect, useState } from "react"

const NewsCard = ({ article: {
    title,
    pubDate,
    sentiment,
    url = '',
    summary = '',
    imageUrl,
} } ) => {
    const [reducedSummary, setReducedSummary] = useState(summary)
    const [reducedUrl, setReducedUrl] = useState(url)

    useEffect(() => {
        if (summary.length > 250) {
            let newSummary = reducedSummary
            setReducedSummary(newSummary.slice(0, 250) + '...')
        }
        if (url.length > 72) {
            let newUrl = reducedUrl
            setReducedUrl(newUrl.slice(0, 72) + '...')
        }
    }, [summary, reducedSummary, url, reducedUrl])

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
                    {reducedSummary ? <p className="cardSummary">{reducedSummary}</p> : null}
                    <a className="cardAnchor" href={url}>{reducedUrl}</a>
                </div>
                <img className='cardImage' src={imageUrl} alt={title} />
            </div>
        </div>
    )
}

export default NewsCard
