import searchIcon from "../../assets/icons/search/search-icon.svg"
import "./search.css"

function Search() {
    return (
        <form className="search-bar">
            <input type="text" placeholder="pesquisar" />
            <button type="submit">
                <img src={searchIcon} alt="Ícone de pesquisa" />
            </button>
        </form>
    )
}

export default Search;