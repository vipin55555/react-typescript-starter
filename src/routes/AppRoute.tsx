import { BrowserRouter, Route, RouteProps, Routes } from "react-router-dom";
import { Test1, Test2, Test3, Test4 } from "../components";
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute";

export interface IRouteProps {
    isAuthorized?: boolean
}

export const AppRoute = () => {
    const isAuthorized: boolean = true;
    return (<BrowserRouter>
        <Routes>
            <Route path="/test1" element={<PrivateRoute isAuthorized={isAuthorized} />}>
                <Route path="" element={<Test1 />} />
            </Route>
            <Route path="/test3" element={<PrivateRoute isAuthorized={isAuthorized} />}>
                <Route path="" element={<Test3 />} />
            </Route>
            <Route path="/test4" element={<PrivateRoute isAuthorized={isAuthorized} />}>
                <Route path="" element={<Test4 />} />
            </Route>
            <Route path="/test2" element={<PublicRoute isAuthorized={isAuthorized} />}>
                <Route path="" element={<Test2 />} />
            </Route>
        </Routes>
    </BrowserRouter>)
}