import Navbar from "../../layout/Navbar"
import Footer from "../../layout/Footer"
import Slider from '../../layout/Slider'
import styles from './Pescado.module.css'
import {useEffect, useState} from "react";

function Pescado (){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://vlj-api.onrender.com/product/get/category/4');
                if (!response.ok) {
                    throw new Error('Erro ao carregar produtos');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const formatPrice = (priceInCents) => {
        return (priceInCents / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    return (
        <div className={styles.body}>
            <Navbar />
            <div className={styles.container}>
                <Slider />
                {loading ? (
                    <div>Carregando...</div>
                ) : error ? (
                    <div>Erro: {error}</div>
                ) : (
                    <div className={styles.produtos}>
                        {products.map((product) => (
                            <div key={product.id} className={styles.produto}>
                                <h3>{product.name}</h3>
                                {product.url_image && (
                                    <img
                                        src={product.url_image}
                                        alt={product.name}
                                        className={styles.productImage}
                                    />
                                )}
                                <div className={styles.preco}>
                                    <div className={styles.pricelabel}>Preço:</div>
                                    <div className={styles.pricecontainer}>
                                        <div className={styles.price}>{formatPrice(product.price_in_cents)}</div>
                                        <div className={styles.unit}>1Kg/Unidade</div>
                                    </div>
                                    <button className={styles.addbtn}>Adicionar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Pescado