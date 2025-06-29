<<<<<<< HEAD
import "./home.css"
import { useEffect, useState } from "react";
import api from "../../services/api";
import CardProduct from "../../components/CardProduct";

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadPorducts() {
            const response = await api.get("https://dummyjson.com/products", {
                params:{
                    language: "pt-BR",
                    page: 1
                }
            })

            setProducts(response.data.products.slice(0, 20));
            console.log(response.data.products.slice(0, 20));
        }
        
        loadPorducts();
    }, [])


    return (
        <div className="homeContainer">
            <section>
                <h2>Categoria</h2>
                <article className="lista-produtos">

                    {products.map((prod) => { return(
                        <CardProduct
                            tags={prod.tags}
                            titulo={prod.title}
                            valor={prod.price} 
                            desconto={prod.discountPercentage}
                            img={prod.thumbnail}
                        />
                    )})}

                    <CardProduct
                        tags={["Beleza", "Moda"]}
                        titulo="Produto"
                        valor="9,99"
                        desconto="10"
                        img="https://neilpatel.com/wp-content/uploads/2019/07/mini-caixas-de-produtos-em-cima-de-laptop-700x468.jpeg"
                    />
                </article>
            </section>
        </div>
    );
=======
import { ProductsHome } from '../../components/Products'

function Home() {
    return(
        <div>
            <ProductsHome/>
        </div>
    )
>>>>>>> feat/home-page
}

export default Home;