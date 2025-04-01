import Navbar from "../../layout/Navbar"
import Footer from "../../layout/Footer"
import Slider from '../../layout/Slider'
import styles from './Suino.module.css'

function Suino() {

    return (
        <>
            <div className={styles.body}>
                <Navbar />
                <div className={styles.container}>
                    <Slider />
                    <div className={styles.produtos}>
                        <div className={styles.produto}>
                            <br />
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
                            <br />
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
                            <br />
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
                            <br />
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
                            <br />
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
                            <br />
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
                            <br />
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
                            <br />
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
                            <br />
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

export default Suino