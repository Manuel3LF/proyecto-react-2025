import { useContext } from "react"
import { UserContext } from "../context/userContext"

const Perfil = () => {

    const usuario = useContext(UserContext)

    return (
        <div>
            <h1>Perfil de {usuario.name}</h1>
            <div>
                Usuario desde: {usuario.Registered}
            </div>
        </div>
    )
}

export default Perfil