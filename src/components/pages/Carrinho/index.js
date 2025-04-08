import styles from "./Carrinho.module.css"
import carrinhoPreto from "../../../assets/Carrinho_Preto.png"
import logoVermelha from "../../../assets/Logo_VLJ_carnes_vermelho.png"

function Carrinho() {

    return (
        <>
            <div className={styles.body}>
                <img src={logoVermelha} />
                <div className={styles.container}>
                    <div className={styles.titulo}>
                        <h1>Carrinho</h1>
                        <img src={carrinhoPreto} />
                    </div>
                    <div className={styles.produto}>
                        <div>
                            <h2>Filé Mignon</h2>
                            <p>0,5kg</p>
                        </div>
                        <div className={styles.quantidade}>
                            <h1 className={styles.qtd}>1</h1>
                            <button className={styles.add}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Carrinho