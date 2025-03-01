import { useContext} from 'react'
import './menu.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'

const Menu = () => {

    const navigation = useNavigate()

    const usuario = useContext(UserContext)

    return (
        <nav className="main-menu">
            <ul>
                <li><NavLink to='/'>Inicio</NavLink></li>
                <li><NavLink to='/criptomonedas'>Lista de Criptos</NavLink></li>
                <li><NavLink to='/perfil'>Perfil de { usuario.name }</NavLink></li>
                <li><a onClick={() => {
                    localStorage.removeItem('token3Lights')
                    navigation('/Login')
                }}>Cerrar Sesión</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu