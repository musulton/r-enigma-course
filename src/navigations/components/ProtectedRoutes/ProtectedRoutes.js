import {Navigate, Outlet} from "react-router-dom";
import constants from "../../../constants";
import Navbar from "../../../components/Navbar";
import { getToken } from "../../../utils/token";

const ProtectedRoutes = () => {
    const hasToken = getToken()
    if (!hasToken) {
        return <Navigate to={constants.routes.LOGIN} replace={true} />
    }

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default ProtectedRoutes
