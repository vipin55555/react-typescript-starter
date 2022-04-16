import { Navigate, Outlet } from "react-router-dom"
import { IRouteProps } from "./AppRoute"

export const PrivateRoute = (props: IRouteProps) => {
    return props.isAuthorized ? <Outlet /> : <Navigate to="/test2"/>;
}