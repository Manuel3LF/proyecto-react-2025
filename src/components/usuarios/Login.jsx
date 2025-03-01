import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import './Login.css'

const Login = () => {

    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [ cargando, setCargando ] = useState(false)
    const [ error, setError ] = useState()

    const submit = (e) => {
        e.preventDefault()
        setCargando(true)
        axios.post(`https://reqres.in/api/login`, user)
        .then(data => {
            setCargando(false)
            setError(null)
            localStorage.setItem('token3Lights', data.data.token)
            navigation('/')
        })
        .catch(e => {
            setCargando(false)
            console.error(e)
            setError(e.response.data.error)
        })
    }

    if (localStorage.getItem('token3Lights')) return <Navigate to='/'/>

    return (
        <div className="login-container">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }} type="email" name='email'/>
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }} type="password" name="password"/>
                </div>
                    <div className="submit">
                        <input
                        type="submit"
                        value={cargando ? 'Cargando...' : 'Ingresar'}
                        className="link"
                    />
                </div>
            </form>
            {
                error && <span className="error">Error: {error}</span>
            }
        </div>
    )
}

export default Login