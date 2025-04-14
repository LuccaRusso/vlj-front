import estilos from "./Footer.module.css"
import logotipo from "../../../assets/Logo_VLJ_carnes.svg"
import iconesRedes from "../../../assets/logos.png"
import formasPagamento from "../../../assets/pagamento.png"

function Footer() {
    return (
        <>
            <div className={estilos.rodape}>
                <div className={estilos.coluna}>
                    <img src={logotipo} alt="logotipo" className={estilos.logo} />
                    <br />
                    <img src={iconesRedes} alt="redes sociais" />
                    <br />
                    <h3>Formas de pagamento</h3>
                    <br />
                    <img src={formasPagamento} alt="formas de pagamento" />
                    <br />
                    <br />
                </div>

                <div className={estilos.coluna2}>
                    <h3>Sobre nós</h3>
                    <br />
                    <p>Sobre nós e termos</p>
                    <br />
                    <p>Sobre nós e ter</p>
                    <br />
                    <p>Sobre nós e termos de</p>
                </div>

                <div className={estilos.coluna2}>
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
