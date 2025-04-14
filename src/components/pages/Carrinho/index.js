import styles from "./Carrinho.module.css"
import logoVermelha from "../../../assets/Logo_VLJ_carnes_vermelho.png"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"; // Importando useNavigate para navegação

function Carrinho() {
    const navigate = useNavigate(); // Usar useNavigate
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    const updateCart = (updatedCart) => {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        updateCart(updatedCart); // Atualiza o carrinho no localStorage
    };

    const incrementQuantity = (id) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCart(updatedCart); // Atualiza o carrinho no localStorage
    };

    const decrementQuantity = (id) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                if (item.quantity === 1) {
                    // Se a quantidade for 1, remove o item do carrinho
                    return null;
                } else {
                    return { ...item, quantity: item.quantity - 1 };
                }
            }
            return item;
        }).filter(item => item !== null); // Filtra os itens null (removidos)

        updateCart(updatedCart); // Atualiza o carrinho no localStorage
    };

    const formatPrice = (priceInCents) => {
        return (priceInCents / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    return (
        <div className={styles.body}>
            <img
                className={styles.icone}
                src={logoVermelha}
                onClick={() => navigate("/")} // Navega para a página inicial ao clicar no logo
                alt="Logo Vermelha"
            />
            <div className={styles.container}>
                <h1 className={styles.title}>Carrinho</h1>
                {cart.length === 0 ? (
                    <div className={styles.emptyCart}>Seu carrinho está vazio</div>
                ) : (
                    cart.map((product) => (
                        <div key={product.id} className={styles.produto}>
                            <div>
                                <h2>{product.name}</h2>
                                <p>{product.quantity}kg</p>
                            </div>
                            <div className={styles.quantidade}>
                                <p className={styles.qtd}>{product.quantity}</p>
                                <button
                                    className={styles.sub}
                                    onClick={() => decrementQuantity(product.id)} // Decrementa a quantidade
                                >
                                    -
                                </button>
                                <button
                                    className={styles.add}
                                    onClick={() => incrementQuantity(product.id)} // Incrementa a quantidade
                                >
                                    +
                                </button>
                            </div>
                            <div className={styles.price}>
                                {formatPrice(product.price_in_cents * product.quantity)} {/* Preço total do item */}
                            </div>
                            <remove
                                className={styles.remove}
                                onClick={() => removeFromCart(product.id)} // Remove o produto do carrinho
                            >
                                Remover
                            </remove>
                        </div>
                    ))
                )}
                <div className={styles.cartButton}>
                    <button onClick={() => navigate("/sucesso")}>
                        Finalizar Compra
                    </button>
                </div>


            </div>
        </div>
    );
}

export default Carrinho;
