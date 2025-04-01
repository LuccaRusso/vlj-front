import styles from "./Home.module.css"
import Footer from '../../layout/Footer'
import Slider from "../../layout/Slider"
import Navbar from "../../layout/Navbar"

function Home() {


  return (
    <>
      <div className={styles.body}>
        <Navbar/>
        <div className={styles.container}>
          <Slider />
          <div className={styles.produtos}>
            <div className={styles.produto}>
              <h3>Filé Mignon</h3>
              <div className={styles.preco}>
                <div className={styles.pricelabel}>Preço:</div>
                <div className={styles.pricecontainer}>
                  <div className={styles.price}>R$59,99</div>
                  <div class={styles.unit}>1Kg/Unidade</div>
                </div>
                <button className={styles.addbtn}>Adicionar</button>
              </div>
            </div>
            <div className={styles.produto}>
              <h3>Filé Mignon</h3>
              <div className={styles.preco}>
                <div className={styles.pricelabel}>Preço:</div>
                <div className={styles.pricecontainer}>
                  <div className={styles.price}>R$59,99</div>
                  <div class={styles.unit}>1Kg/Unidade</div>
                </div>
                <button className={styles.addbtn}>Adicionar</button>
              </div>
            </div>
            <div className={styles.produto}>
              <h3>Filé Mignon</h3>
              <div className={styles.preco}>
                <div className={styles.pricelabel}>Preço:</div>
                <div className={styles.pricecontainer}>
                  <div className={styles.price}>R$59,99</div>
                  <div class={styles.unit}>1Kg/Unidade</div>
                </div>
                <button className={styles.addbtn}>Adicionar</button>
              </div>
            </div>
            <div className={styles.produto}>
              <h3>Filé Mignon</h3>
              <div className={styles.preco}>
                <div className={styles.pricelabel}>Preço:</div>
                <div className={styles.pricecontainer}>
                  <div className={styles.price}>R$59,99</div>
                  <div class={styles.unit}>1Kg/Unidade</div>
                </div>
                <button className={styles.addbtn}>Adicionar</button>
              </div>
            </div>
            <div className={styles.produto}>
              <h3>Filé Mignon</h3>
              <div className={styles.preco}>
                <div className={styles.pricelabel}>Preço:</div>
                <div className={styles.pricecontainer}>
                  <div className={styles.price}>R$59,99</div>
                  <div class={styles.unit}>1Kg/Unidade</div>
                </div>
                <button className={styles.addbtn}>Adicionar</button>
              </div>
            </div>
            <div className={styles.produto}>
              <h3>Filé Mignon</h3>
              <div className={styles.preco}>
                <div className={styles.pricelabel}>Preço:</div>
                <div className={styles.pricecontainer}>
                  <div className={styles.price}>R$59,99</div>
                  <div class={styles.unit}>1Kg/Unidade</div>
                </div>
                <button className={styles.addbtn}>Adicionar</button>
              </div>
            </div>
            <div className={styles.produto}>
              <h3>Filé Mignon</h3>
              <div className={styles.preco}>
                <div className={styles.pricelabel}>Preço:</div>
                <div className={styles.pricecontainer}>
                  <div className={styles.price}>R$59,99</div>
                  <div class={styles.unit}>1Kg/Unidade</div>
                </div>
                <button className={styles.addbtn}>Adicionar</button>
              </div>
            </div>
            <div className={styles.produto}>
              <h3>Filé Mignon</h3>
              <div className={styles.preco}>
                <div className={styles.pricelabel}>Preço:</div>
                <div className={styles.pricecontainer}>
                  <div className={styles.price}>R$59,99</div>
                  <div class={styles.unit}>1Kg/Unidade</div>
                </div>
                <button className={styles.addbtn}>Adicionar</button>
              </div>
            </div>
            <div className={styles.produto}>
              <h3>Filé Mignon</h3>
              <div className={styles.preco}>
                <div className={styles.pricelabel}>Preço:</div>
                <div className={styles.pricecontainer}>
                  <div className={styles.price}>R$59,99</div>
                  <div class={styles.unit}>1Kg/Unidade</div>
                </div>
                <button className={styles.addbtn}>Adicionar</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default Home
