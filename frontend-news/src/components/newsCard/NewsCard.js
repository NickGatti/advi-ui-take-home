import { useEffect, useState } from "react"

const NewsCard = ({ article: {
    title,
    pubDate,
    url = '',
    summary = '',
    imageUrl,
    description = '',
} }) => {
    const [reducedSummary, setReducedSummary] = useState(summary)
    const [reducedUrl, setReducedUrl] = useState(url)
    const [reducedDescription, setReducedDescription] = useState(description)

    useEffect(() => {
        if (summary.length > 250) {
            setReducedSummary(summary.slice(0, 250) + '...')
        }
        if (description.length > 250) {
            setReducedDescription(description.slice(0, 250) + '...')
        }
        if (url.length > 72) {
            setReducedUrl(url.slice(0, 72) + '...')
        }
    }, [title, url, imageUrl, summary, description])

    const handleNullContent = () => {
        if (summary.length === 0 && description.length === 0) {
            return <p>Please visist site for more.</p>
        } else if (summary.length === 0) {
            return <p>{reducedDescription}</p>
        } else {
            return <p>{reducedSummary}</p>
        }
    }

    return (
        <div className='card'>
            <div className="cardPadding">
                <div className='divider'>
                    <h4 className="cardTitle">{title}</h4>
                    <p className="cardDate">{new Date(pubDate).toString()}</p>
                    {handleNullContent()}
                    <a className="cardAnchor" href={url}>{reducedUrl}</a>
                </div>
                <img className='cardImage' src={imageUrl} alt={title} />
            </div>
        </div>
    )
}

export default NewsCard
