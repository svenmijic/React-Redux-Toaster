import { combineReducers, compose, createStore } from "redux";
import { toastMessageReducer as toastMessage, ToastMessageState } from "./toastMessageReducer";

export interface AppState {
    toastMessage: ToastMessageState;
}

export default function configureStore(initialState?: AppState) {
    const rootReducer = combineReducers<AppState>({
        toastMessage,
    });

    const enhancers = [];
    const windowIfDefined = typeof window === "undefined" ? null : (window as any);
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    const result = createStore(rootReducer, initialState, compose(...enhancers));

    return result;
}
