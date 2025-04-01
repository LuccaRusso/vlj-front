import styles from './Navbar.module.css'
import logo from '../../../assets/Logo_VLJ_carnes.svg'
import carrinho from '../../../assets/Carrinho.png'
import { useNavigate, useLocation } from 'react-router-dom'

function Navbar() {

    const location = useLocation()
    const navigate = useNavigate()

    return (
        <>
            <nav className={styles.navbar}>
                <img src={logo} alt="logo" className={styles.boi} />
                <button className={styles.home} onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/bovinos')}>Bovinos</button>
                <button onClick={() => navigate('/aves')}>Aves</button>
                <button onClick={() => navigate('/suinos')}>Suinos</button>
                <button onClick={() => navigate('/pescados')}>Pescados</button>
                <button onClick={() => navigate('/carrinho')}><img src={carrinho} alt="logo" className={styles.carrinho} /></button>
            </nav>
        </>
    )
}
export default Navbar