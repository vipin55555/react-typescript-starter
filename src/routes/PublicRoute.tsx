import { Navigate, Outlet } from "react-router"
import { IRouteProps } from "./AppRoute"

export const PublicRoute = (props: IRouteProps) => {
    return props.isAuthorized ? <Navigate to="/test1" /> : <Outlet />;
}