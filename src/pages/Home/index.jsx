import "./home.css"
import { useEffect, useState } from "react";
import api from "../../services/api";
import CardProduct from "../../components/CardProduct";

function Home() {

    const [products, setProducts] = useState([]);
    const [productsByCategory, setProductsByCategory] = useState([]);

    useEffect(() => {
        async function loadPorducts() {
            const response = await api.get("https://dummyjson.com/products", {
                params:{
                    language: "pt-BR",
                    page: 1
                }
            });

            // Lista com todos os produtos
            const allProducts = response.data.products;

            // Separa os produtos por categoria 
            const groupProducts = allProducts.reduce((acc, product) => {
                const category = product.category;

                if(!acc[category]) {
                    acc[category] = [];
                } 
                
                if(acc[category].length < 4) {
                    acc[category].push(product);
                }

                return acc;
            }, {})

            // Limita a quantidade de categorias
            const limiteGroupProducts = Object.entries(groupProducts)
                .slice(0, 4) // 4 categorias
                .map(([category, products]) => ({
                    category,products
                })); // Cria vários objetos contendo categoria e produto

            setProducts(response.data.products);
            setProductsByCategory(limiteGroupProducts);
        }
        
        loadPorducts();
    }, [])

    return (
        <div className="homeContainer">
                {productsByCategory.map(({category, products}) => {
                    return(
                        <section key={category}>
                            <h2>{category}</h2>
                            <article className="lista-produtos">
                                {products.map((prod) => (
                                        <CardProduct
                                            key={prod.id}
                                            tags={prod.tags}
                                            titulo={prod.title}
                                            valor={prod.price}
                                            desconto={prod.discountPercentage}
                                            img={prod.thumbnail}
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

export default Home;