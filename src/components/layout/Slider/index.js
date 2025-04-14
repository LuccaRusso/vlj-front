import { useState, useEffect } from "react"
import estilos from "./Slider.module.css"
import imagemBovino from "./../../../assets/bovino_slider.png"
import imagemSuino from "./../../../assets/suino_slider.png"
import imagemAve from "./../../../assets/ave_slider.png"
import imagemPescado from "./../../../assets/pescado_slider.png"

function Slider() {
  const [contador, definirContador] = useState(1)

  useEffect(() => {
    const intervalo = setInterval(() => {
      definirContador((valorAnterior) => (valorAnterior >= 4 ? 1 : valorAnterior + 1))
    }, 5000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className={estilos.deslizante}>
      <div className={estilos.deslizamentos}>
        {[1, 2, 3, 4].map((numero) => (
          <input
            key={numero}
            type="radio"
            name="botao-radio"
            id={`radio${numero}`}
            checked={contador === numero}
            readOnly
          />
        ))}

        <div className={estilos.deslizamento} style={{ marginLeft: `-${(contador - 1) * 25}%` }}>
          <img src={imagemBovino} alt="Imagem 1" />
        </div>
        <div className={estilos.deslizamento}>
          <img src={imagemSuino} alt="Imagem 2" />
        </div>
        <div className={estilos.deslizamento}>
          <img src={imagemAve} alt="Imagem 3" />
        </div>
        <div className={estilos.deslizamento}>
          <img src={imagemPescado} alt="Imagem 4" />
        </div>
      </div>

      <div className={estilos.navegacaoManual}>
        {[1, 2, 3, 4].map((numero) => (
          <label
            key={numero}
            className={estilos.botaoManual}
            onClick={() => definirContador(numero)}
          ></label>
        ))}
      </div>
    </div>
  )
}

export default Slider
