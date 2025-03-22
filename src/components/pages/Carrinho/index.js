import styles from "./Carrinho.module.css"
import carrinhoPreto from "../../../assets/Carrinho_Preto.png"
import logoVermelha from "../../../assets/Logo_VLJ_carnes_vermelho.png"

function Carrinho (){

    return(
        <>
            <img src={logoVermelha}/>
            <div className={styles.container}>
                <div className={styles.titulo}>
                    <h1>Comprar</h1>
                    <img src={carrinhoPreto}/>
                </div>
                <form>
                    <input/>
                    <input/>
                    <input/>
                </form>
            </div>
        </>
    )

}

export default Carrinho