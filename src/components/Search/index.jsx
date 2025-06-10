import searchIcon from "../../assets/icons/search/search-icon.svg"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import "./search.css"

function Search() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handlesearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?query=${encodeURIComponent(query)}`)
        }
    }


    return (
        <form className="search-bar" onSubmit={handlesearch}>
            <input 
                type="text"
                placeholder="pesquisar"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button type="submit">
                <img src={searchIcon} alt="Ícone de pesquisa" />
            </button>
        </form>
    )
}

export default Search;