import styles from './Navbar.module.css'
import logo from '../../../assets/Logo_VLJ_carnes.svg'
import carrinho from '../../../assets/Carrinho.png'
import { useNavigate, useLocation } from 'react-router-dom'

function Navbar(){

    const location = useLocation()
    const navigate = useNavigate()

    return(
        <>
           <div className={styles.centro}>
                <img src={logo} alt="logo" className={styles.logo} />
                <nav className={styles.navbar}>
                        <button className={styles.home}>Home</button>
                        <button onClick={() => navigate('/bovinos')}>Bovinos</button>
                        <button onClick={() => navigate('/aves')}>Aves</button>
                        <button onClick={() => navigate('/suinos')}>Suinos</button>
                        <button onClick={() => navigate('/pescados')}>Pescados</button>
                </nav>
                <button className={styles.carrinho} onClick={() => navigate('/carrinho')}><img src={carrinho} alt="" /></button>
           </div>
        </>
    )
}
export default Navbar