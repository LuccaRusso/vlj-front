import './Navbar.modules.css'
import logo from '../../assets/Logo_VLJ_carnes.svg'

function Navbar(){

    return(
        <>
           <div className='centro'>
                <img src={logo} alt="logo" className='logo' />
                <nav className="navbar">
                        <button className='home'>Home</button>
                        <button>Bovinos</button>
                        <button>Aves</button>
                        <button>Suinos</button>
                        <button>Pescados</button>
                </nav>
           </div>
        </>
    )

}
export default Navbar