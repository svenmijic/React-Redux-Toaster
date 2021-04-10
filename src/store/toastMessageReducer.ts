import { Reducer } from "redux";
import {
    SET_TOAST_MESSAGE,
    SHOW_TOAST_MESSAGE,
    HIDE_TOAST_MESSAGE,
} from "../actions/toastMessageActions";

export interface ToastMessageState {
    showMessage: boolean;
    text: string;
    success: boolean;
}

const initialState: ToastMessageState = {
    showMessage: false,
    text: "",
    success: false,
};

export const toastMessageReducer: Reducer<ToastMessageState> = (
    state: ToastMessageState = initialState,
    action: any
): ToastMessageState => {
    switch (action.type) {
        case SET_TOAST_MESSAGE:
            return { ...state, text: action.text, success: action.success };
        case SHOW_TOAST_MESSAGE:
            return { ...state, showMessage: true };
        case HIDE_TOAST_MESSAGE:
            return { ...state, showMessage: false };
        default:
            return state;
    }
};
