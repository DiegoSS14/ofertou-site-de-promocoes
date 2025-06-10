import "./products.css"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../services/api";
import CardProduct from "../../components/CardProduct";

function ProductsHome() {

    const [products, setProducts] = useState([]);
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [favoriteList, setFavoriteList] = useState(() => {
        const stored = localStorage.getItem("@favoriteList");
        return stored ? JSON.parse(stored) : [];
    });

    // Salva no localStorage toda vez que a lista atualiza
    useEffect(() => {
        localStorage.setItem("@favoriteList", JSON.stringify(favoriteList))
    }, [favoriteList]);

    useEffect(() => {
        async function loadPorducts() {
            const response = await api.get("https://dummyjson.com/products", {
                params: {
                    language: "pt-BR",
                    page: 1
                }
            });

            // Lista com todos os produtos
            const allProducts = response.data.products;

            // Separa os produtos por categoria 
            const groupProducts = allProducts.reduce((acc, product) => {
                const category = product.category;

                if (!acc[category]) {
                    acc[category] = [];
                }

                if (acc[category].length < 4) {
                    acc[category].push(product);
                }

                return acc;
            }, {})

            // Limita a quantidade de categorias
            const limiteGroupProducts = Object.entries(groupProducts)
                .slice(0, 4) // 4 categorias
                .map(([category, products]) => ({
                    category, products
                })); // Cria vários objetos contendo categoria e produto

            setProducts(response.data.products);
            setProductsByCategory(limiteGroupProducts);
        }

        loadPorducts();
    }, [])

    function toggleFavorite(produto) {
        setFavoriteList(prevList => {
            const exists = prevList.some(item => item.title === produto.title)

            if (exists) {
                return prevList.filter(item => item.title !== produto.title);
            } else {
                return [...prevList, produto];
            }
        });
    }

    return (
        <div className="productContainer">
            {productsByCategory.map(({ category, products }) => {
                return (
                    <section key={category}>
                        <h2>{category}</h2>
                        <article className="lista-produtos">
                            {products.map((prod) => (
                                <CardProduct
                                    id={prod.id}
                                    key={prod.id}
                                    tags={prod.tags}
                                    titulo={prod.title}
                                    valor={prod.price}
                                    desconto={prod.discountPercentage}
                                    img={prod.thumbnail}

                                    onToggleFavorite={() => toggleFavorite(prod)}
                                    isFavorited={favoriteList.some(item => item.title === prod.title)}
                                />
                            )
                            )}
                        </article>
                    </section>
                )
            })}
        </div>
    );
}


// Produtos da pesquisa
function ProductsSearch() {

    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const [favoriteList, setFavoriteList] = useState(() => {
        const stored = localStorage.getItem("@favoriteList");
        return stored ? JSON.parse(stored) : [];
    });

    // Salva no localStorage toda vez que a lista atualiza
    useEffect(() => {
        localStorage.setItem("@favoriteList", JSON.stringify(favoriteList))
    }, [favoriteList]);

    const searchTerm = searchParams.get("query") || "";

    useEffect(() => {
        async function loadPorducts() {
            const endpoint = searchTerm
                ? "https://dummyjson.com/products/search"
                : "https://dummyjson.com/products";

            const response = await api.get(endpoint, {
                params: searchTerm ? { q: searchTerm } : {}
            });

            setProducts(response.data.products);
        }

        loadPorducts();
    }, [searchTerm]) // Agora o useEffect irá atualizar toda vez que o termo de busca mudar.

    function toggleFavorite(produto) {
        setFavoriteList(prevList => {
            const exists = prevList.some(item => item.id === produto.id)

            if (exists) {
                return prevList.filter(item => item.id !== produto.id);
            } else {
                return [...prevList, produto];
            }
        });
    }

    return (
        <div className="productContainer">
            <section>
                <article className="lista-produtos">
                    {products.map((prod) => (
                        <CardProduct
                            id={prod.id}
                            key={prod.id}
                            tags={prod.tags}
                            titulo={prod.title}
                            valor={prod.price}
                            desconto={prod.discountPercentage}
                            img={prod.thumbnail}

                            onToggleFavorite={() => toggleFavorite(prod)}
                            isFavorited={favoriteList.some(item => item.id === prod.id)}
                        />
                    )
                    )}
                </article>
            </section>
        </div>
    );
}


// Products Favorites
function ProductsFavorites() {
    const [favoriteList, setFavoriteList] = useState(() => {
        const stored = localStorage.getItem("@favoriteList");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("@favoriteList", JSON.stringify(favoriteList))
    }, [favoriteList]);

    function toggleFavorite(produto) {
        setFavoriteList(prevList => {
            const exists = prevList.some(item => item.id === produto.id)

            if (exists) {
                return prevList.filter(item => item.id !== produto.id);
            } else {
                return [...prevList, produto];
            }
        });
    }

    return (
        <div className="productContainer">
            <section>
                <h2>Lista de Favoritos</h2>
                <article className="lista-produtos">
                    {favoriteList.map((prod) => (
                        <CardProduct
                            id={prod.id}
                            key={prod.id}
                            tags={prod.tags}
                            titulo={prod.title}
                            valor={prod.price}
                            desconto={prod.discountPercentage}
                            img={prod.thumbnail}

                            onToggleFavorite={() => toggleFavorite(prod)}
                            isFavorited={favoriteList.some(item => item.id === prod.id)}
                        />
                    )
                    )}
                </article>
            </section>
        </div>
    );
}


export { ProductsHome, ProductsSearch, ProductsFavorites};