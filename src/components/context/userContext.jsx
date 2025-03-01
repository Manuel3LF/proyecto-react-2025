import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {

    const [ usuario, SetUsuario ] = useState({})
        useEffect(() => {
            SetUsuario({
                name: 'Usuario XYX',
                Registered: '201010'
            })
        }, [])

    return (
        <UserContext.Provider value={usuario}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }