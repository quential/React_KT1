import type {ReactNode} from "react";
import {Navigate, useLocation} from "react-router"

type PrivateRouteProps = {
    children: ReactNode;
}

const PrivateRoute = ({children}: PrivateRouteProps) => {
    const location = useLocation();

    const isAuthenticated =
        localStorage.getItem("isAuthenticated") === "true";

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/login"
                replace
                state={{from: location.pathname}}
            />
        );
    }

    return children;
};

export default PrivateRoute;