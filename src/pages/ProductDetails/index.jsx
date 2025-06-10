import "./productDetails.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";

function ProductDetails() {

    const { id } = useParams();
    const [produto, setProduto] = useState(null)
    const [favoriteList, setFavoriteList] = useState(() => {
        const stored = localStorage.getItem("@favoriteList");
        return stored ? JSON.parse(stored) : [];
    });

    // Salva no localStorage toda vez que a lista atualiza
    useEffect(() => {
        localStorage.setItem("@favoriteList", JSON.stringify(favoriteList));
    }, [favoriteList]);

    useEffect(() => {
        async function loadProduct() {
            const response = await api.get(`/${id}`, {})
            setProduto(response.data)
            console.log(response.data)
        }

        loadProduct()
    }, []);

    if (!produto) {
        return <p>Carregando...</p>
    }

    function toggleFavorite(produto) {
        setFavoriteList(prevList => {
            const exists = prevList.some(item => item.title === produto.title)

            if (exists) {
                return prevList.filter(item => item.title !== produto.title);
            } else {
                const cleanProduct = {
                    id: produto.id,
                    title: produto.title,
                    price: produto.price,
                    images: produto.images,
                    discountPercentage: produto.discountPercentage,
                    brand: produto.brand,
                    images: produto.images
                }
                return [...prevList, cleanProduct];
            }
        })
    }

    return (
        <div className="container-details">
            <section>
                <img src={Array.isArray(produto.images) ? produto.images[0] : produto.images} alt={produto.title} />
                <div
                    className={`fav-mark ${favoriteList.some(item => item.title === produto.title) ? "favorited-mark" : ""}`}
                    onClick={() => toggleFavorite(produto)}>
                </div>
                <div className="prod-info">
                    <div className="prod-variants">
                        <div className="area-tags">
                            {produto.tags.map((tag) => (
                                <div className="tag" key={tag}>
                                    <p>{tag}</p>
                                </div>
                            ))}
                        </div>
                        <h2>{produto.title}</h2>
                        <div className="area-price">
                            <div className="area-value">
                                <h3>R$</h3>
                                <h2>{produto.price}</h2>
                            </div>
                            <p>{produto.discountPercentage}% OFF</p>
                        </div>
                    </div>
                    <button>Conferir na loja</button>
                    <div className="item-detail">
                        <h3>Brand</h3>
                        <p>{produto.brand}</p>
                        <h3>Description</h3>
                        <p>{produto.description}</p>
                        <h3>Dimensions</h3>
                        <p>Width: {produto.dimensions.width}mm</p>
                        <p>Height: {produto.dimensions.height}mm</p>
                        <p>Depth: {produto.dimensions.depth}mm</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetails;