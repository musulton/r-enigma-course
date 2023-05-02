import {Navigate, Outlet} from "react-router-dom";
import constants from "../../../constants";
import Navbar from "../../../components/Navbar";

const ProtectedRoutes = ({isLoggedIn, setIsLoggedIn}) => {
    const hasToken = isLoggedIn
    if (!hasToken) {
        return <Navigate to={constants.routes.LOGIN} replace={true} />
    }

    return (
        <>
            <Navbar setIsLoggedIn={setIsLoggedIn} />
            <Outlet />
        </>
    )
}

export default ProtectedRoutes
