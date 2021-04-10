import { ToastMessage } from "../../components/ToastMessage/ToastMessage";
import { Header } from "../Header/Header";

export const Layout = (props: any) => {
    return (
        <div id="layout">
            <ToastMessage />
            <Header />
            <main className="main">{props.children}</main>
        </div>
    );
};
