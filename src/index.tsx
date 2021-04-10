import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { SetToastMessage, ShowToastMessage, HideToastMessage } from "./actions/toastMessageActions";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store/configureStore";

const store = configureStore();

export const toast = (text: string, success: boolean, timeout: number = 3000) => {
    const dispatch = store.dispatch;
    dispatch(SetToastMessage(text, success));
    dispatch(ShowToastMessage());
    setTimeout(() => dispatch(HideToastMessage()), timeout);
};

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();
