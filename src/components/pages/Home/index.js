    import styles from "./Home.module.css"
    import Footer from '../../layout/Footer'
    import Slider from "../../layout/Slider"
    import Navbar from "../../layout/Navbar"
    import frango from "../../../assets/peito_frango.webp"
    import file from "../../../assets/contra_file.jpg"
    import costela from "../../../assets/costelinha-suina.png"
    import pescado from "../../../assets/file-merluza.jpg"

    function Home() {
      return (
        <>
          <div className={styles.body}>
            <Navbar />
            <div className={styles.container}>
              <Slider />
              <div className={styles.produtos}>
                {/* Carne Bovina */}
                <div className={styles.produto}>
                  <img src={file} alt="Contra Filé" className={styles.produtoImg} />
                  <h3>Bovinos</h3>
                  <button className={styles.addbtn} onClick={() => window.location.href = '/bovinos'}>Comprar</button>
                </div>


                {/* Frango */}
                <div className={styles.produto}>
                <img src={frango} alt="Peito de frango" className={styles.produtoImg} />
                  <h3>Aves</h3>
                  <button className={styles.addbtn} onClick={() => window.location.href = '/aves'}>Comprar</button>
                </div>

                {/* Carne Suína */}
                <div className={styles.produto}>
                <img src={costela} alt="Constelinha de porco" className={styles.produtoImg} />
                  <h3>Suinos</h3>
                  <button className={styles.addbtn} onclick={() => window.location.href = '/suinos'}>Comprar</button>
                </div>

                {/* Pescados */}
                <div className={styles.produto}>
                <img src={pescado} alt="Filé de Merluza" className={styles.produtoImg} />
                  <h3>Pescados</h3>
                  <button className={styles.addbtn} onClick={() => window.location.href = '/pescados'}>Comprar</button>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </>
      )
    }

    export default Home
