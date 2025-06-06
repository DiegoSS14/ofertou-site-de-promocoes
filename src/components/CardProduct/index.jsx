import { useState } from "react"
import "./CardProduct.css"

function CardProduct({ tags, titulo, valor, desconto, img}) {

    const [favorited, setFavorited] = useState(false);

    function toggleFavorite() {
        setFavorited(!favorited)
    }

    return (
        <div className="card-item">
            <img src={img} alt={titulo} className="img"/>
            <div className="container-info">
                <div 
                className={`fav-button ${favorited ? "favorited-button": ""}`}
                onClick={toggleFavorite}></div>

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
                </div>
                
                </div>

                <button>Ver oferta</button>
            </div>
        </div>
    )
}

export default CardProduct;