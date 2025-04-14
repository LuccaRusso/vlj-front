import estilos from './Navbar.module.css'
import logotipo from '../../../assets/Logo_VLJ_carnes.svg'
import iconeCarrinho from '../../../assets/Carrinho.png'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Navbar() {

    const localizacao = useLocation()
    const navegar = useNavigate()
    const [usuarioLogado, definirUsuarioLogado] = useState(null)

    useEffect(() => {
        const usuario = localStorage.getItem("usuarioLogado")
        if (usuario) {
            definirUsuarioLogado(usuario)
        }
    }, [])

    const estaAtivo = (caminho) => localizacao.pathname === caminho

    return (
        <>
            <nav className={estilos.barraNavegacao}>
                <img src={logotipo} alt="logotipo" className={estilos.boi} />
                <button
                    className={estaAtivo('/') ? estilos.ativo : ''}
                    onClick={() => navegar('/')}
                >
                    Início
                </button>
                <button
                    className={estaAtivo('/bovinos') ? estilos.ativo : ''}
                    onClick={() => navegar('/bovinos')}
                >
                    Bovinos
                </button>
                <button
                    className={estaAtivo('/aves') ? estilos.ativo : ''}
                    onClick={() => navegar('/aves')}
                >
                    Aves
                </button>
                <button
                    className={estaAtivo('/suinos') ? estilos.ativo : ''}
                    onClick={() => navegar('/suinos')}
                >
                    Suínos
                </button>
                <button
                    className={estaAtivo('/pescados') ? estilos.ativo : ''}
                    onClick={() => navegar('/pescados')}
                >
                    Pescados
                </button>

                {usuarioLogado ? (
                    <>
                        <span className={estilos.usuario}>Olá, {usuarioLogado}!</span>
                        <button onClick={() => {
                            localStorage.removeItem("usuarioLogado")
                            definirUsuarioLogado(null)
                            navegar('/')
                        }}>
                            Sair
                        </button>
                    </>
                ) : (
                    <button className={estilos.botaoCadastro} onClick={() => navegar('/cadastro')}>
                        Cadastrar
                    </button>
                )}

                <button onClick={() => navegar('/carrinho')}>
                    <img src={iconeCarrinho} alt="carrinho" className={estilos.carrinho} />
                </button>
            </nav>
        </>
    )
}

export default Navbar
