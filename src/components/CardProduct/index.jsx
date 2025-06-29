<<<<<<< HEAD
import "./CardProduct.css"

function CardProduct({ tags, titulo, valor, desconto, img}) {
=======
import { useState } from "react"
import "./CardProduct.css"
import { useNavigate } from "react-router-dom"


function CardProduct({ tags, titulo, valor, desconto, img, onToggleFavorite, isFavorited, id}) {
    
    const notify = () => toast("Produto adicionado!")

    const [favorited, setFavorited] = useState(false);
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/product/${id}`)
    }

>>>>>>> feat/home-page
    return (
        <div className="card-item">
            <img src={img} alt={titulo} className="img"/>
            <div className="container-info">
<<<<<<< HEAD
=======
                <div 
                className={`fav-button ${isFavorited ? "favorited-button": ""}`}
                onClick={onToggleFavorite}>
                </div>

>>>>>>> feat/home-page
                <div className="container-variants">
                    <div className="area-tags">
                        {Array.isArray(tags) ? tags.map((tag, index) =>
                            (<div key={index}><p>{tag}</p></div>)
                            ) 
                            : [tags].map(
                            (tag, index) => (
                                <div key={index}><p>{tag}</p></div>
                            )
                        )
                        }
                    </div>
                    <h2>{titulo}</h2>
                    <div className="area-price">
                        <div className="area-value">
                            <h3>R$</h3>
                            <h2>{valor}</h2>
                        </div>
                        <p>{desconto}% OFF</p>
<<<<<<< HEAD
                </div>
                
                </div>

                <button>Ver oferta</button>
=======
                    </div>
                
                </div>

                <button onClick={handleClick}>Ver oferta</button>
>>>>>>> feat/home-page
            </div>
        </div>
    )
}

export default CardProduct;