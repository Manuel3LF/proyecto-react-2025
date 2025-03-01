import Menu from "./menu/menu"
import { Navigate, Outlet } from "react-router-dom"

const App = () => {

    if (!localStorage.getItem('token3Lights')) return <Navigate to='/login'/>

    return(
        <div className="app-container">
            <Menu />
            <Outlet />
        </div>
    )
}

export default App