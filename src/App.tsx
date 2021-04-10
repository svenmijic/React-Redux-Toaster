import { Layout } from "./containers/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./containers/Home/Home";

export const App = () => {
    return (
        <Layout>
            <Switch>
                <Route component={Home} />
            </Switch>
        </Layout>
    );
};
