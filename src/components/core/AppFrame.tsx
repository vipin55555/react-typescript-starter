import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export interface IAppFrameProps {
    children: React.ReactNode;
}
const AppFrame = (props: IAppFrameProps) => {
    const isAuthorized: boolean = true;
    return (<>
        {isAuthorized ? <div>
            <Header />
            <br />
            <Sidebar />
            <br />
            {props.children}
        </div> : <div>{props.children}</div>}
    </>)
}

export { AppFrame }