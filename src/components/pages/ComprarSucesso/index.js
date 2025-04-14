import styles from './ComprarSucesso.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ComprarSucesso() {
    const navigate = useNavigate();

    useEffect(() => {

        localStorage.removeItem("cart");

        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => clearTimeout(timer); 
    }, [navigate]);

    return (
        <div className={styles.sucesso}>
            <h1>🎉 Compra realizada com sucesso!</h1>
            <p>Você será redirecionado em instantes...</p>
        </div>
    );
}

export default ComprarSucesso;
