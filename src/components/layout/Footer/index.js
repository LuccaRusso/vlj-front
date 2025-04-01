import styles from "./Footer.module.css"
import logo from "../../../assets/Logo_VLJ_carnes.svg"
import redes from "../../../assets/logos.png"
import pagamento from "../../../assets/pagamento.png"

function Footer() {

    return (
        <>
            <div className={styles.footer}>
                <div className={styles.column}>
                    <img src={logo} alt="logo" className={styles.logo} />
                    <br />
                    <img src={redes} alt="rede" />
                    <br />
                    <h3>Formas de pagamento</h3>
                    <br />
                    <img src={pagamento} alt="pagamento" />
                    <br />
                    <br />
                </div>

                <div className={styles.column2}>
                    <h3>Sobre nós</h3>
                    <br />
                    <p>Sobre nós e termos</p>
                    <br />
                    <p>Sobre nós e ter</p>
                    <br />
                    <p>Sobre nós e termos de</p>
                </div>

                <div className={styles.column2}>
                    <h3>Termos e Documentações</h3>
                    <br />
                    <p>Sobre nós e termos sobre subre tudp tudp </p>
                    <br />
                    <p>Sobre nós e ter</p>
                    <br />
                    <p>Sobre nós e termos de</p>
                    <br />
                    <h3>Ajuda</h3>
                    <p>Contate-nos:</p>
                    <br />
                    <p>vljCarnesAjuda@jbs.com.br</p>
                    <br />
                    <p>+55 11 4321 0866</p>
                </div>
            </div>
        </>
    )
}

export default Footer;
