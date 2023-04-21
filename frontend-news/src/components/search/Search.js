import { useState } from "react";
import Button from "../Button";

const Search = ({setSearchTerm}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = e => {
        setInputValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setSearchTerm(inputValue)
    }

    return (
        <form className="searchForm" onSubmit={handleSubmit}>
            <input className="searchInput" type="text" onChange={handleChange} value={inputValue}/>
            <Button click={handleSubmit}>Search</Button>
        </form>
    )
}

export default Search
