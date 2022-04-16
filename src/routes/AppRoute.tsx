import { BrowserRouter, Route, RouteProps, Routes } from "react-router-dom";
import { Test1, Test2 } from "../components";
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute";

export interface IRouteProps {
    isAuthorized?: boolean
}

export const AppRoute = () => {
    const isAuthorized: boolean = false;
    return (<BrowserRouter>
        <Routes>
            <Route path="/private" element={<PrivateRoute isAuthorized={isAuthorized} />}>
                <Route path="" element={<Test1 />} />

            </Route>
            <Route path="/public" element={<PublicRoute isAuthorized={isAuthorized} />}>
                <Route path="" element={<Test2 />} />
            </Route>
        </Routes>
    </BrowserRouter>)
}