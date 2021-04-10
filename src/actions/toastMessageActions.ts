export const SET_TOAST_MESSAGE = "SET_TOAST_MESSAGE";
export const SHOW_TOAST_MESSAGE = "SHOW_TOAST_MESSAGE";
export const HIDE_TOAST_MESSAGE = "HIDE_TOAST_MESSAGE";

export const SetToastMessage = (text: string, success: boolean) => {
    return { type: SET_TOAST_MESSAGE, text, success };
};
export const ShowToastMessage = () => {
    return { type: SHOW_TOAST_MESSAGE };
};
export const HideToastMessage = () => {
    return { type: HIDE_TOAST_MESSAGE };
};
