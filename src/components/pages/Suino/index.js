import BarraNavegacao from "../../layout/Navbar"
import Rodape from "../../layout/Footer"
import Slider from '../../layout/Slider'
import estilos from './Suino.module.css'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Suino() {
  const [produtos, definirProdutos] = useState([])
  const [carregando, definirCarregando] = useState(true)
  const [erro, definirErro] = useState(null)
  const navegar = useNavigate()

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const resposta = await fetch('https://vlj-api.onrender.com/product/get/category/2')
        if (!resposta.ok) {
          throw new Error('Erro ao carregar produtos')
        }
        const dados = await resposta.json()
        definirProdutos(dados)
      } catch (err) {
        definirErro(err.message)
      } finally {
        definirCarregando(false)
      }
    }

    buscarProdutos()
  }, [])

  const formatarPreco = (precoEmCentavos) => {
    return (precoEmCentavos / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  const adicionarAoCarrinho = (produto) => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    const produtoExistente = carrinho.find(item => item.id === produto.id)

    if (produtoExistente) {
      produtoExistente.quantity += 1
    } else {
      carrinho.push({ ...produto, quantity: 1 })
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho))
  }

  const irParaCarrinho = () => {
    navegar("/carrinho")
  }

  return (
    <div className={estilos.corpo}>
      <BarraNavegacao />
      <div className={estilos.container}>
        <Slider />
        {carregando ? (
          <div>Carregando...</div>
        ) : erro ? (
          <div>Erro: {erro}</div>
        ) : (
          <div className={estilos.listaProdutos}>
            {produtos.map((produto) => (
              <div key={produto.id} className={estilos.produto}>
                {produto.url_image && (
                  <img
                    src={produto.url_image}
                    alt={produto.name}
                    className={estilos.imagemProduto}
                  />
                )}
                <h3>{produto.name}</h3>
                <div className={estilos.preco}>
                  <div className={estilos.rotuloPreco}>Preço:</div>
                  <div className={estilos.containerPreco}>
                    <div className={estilos.valor}>{formatarPreco(produto.price_in_cents)}</div>
                    <div className={estilos.unidade}>1Kg/Unidade</div>
                  </div>
                  <button 
                    className={estilos.botaoComprar} 
                    onClick={() => adicionarAoCarrinho(produto)}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Rodape />

    </div>
  )
}

export default Suino
