import { useDispatch, useSelector } from "react-redux";
import { Message, Segment, TransitionablePortal } from "semantic-ui-react";
import { HideToastMessage } from "../../actions/toastMessageActions";
import { AppState } from "../../store/configureStore";

export const ToastMessage = () => {
    const dispatch = useDispatch();
    const { showMessage, text, success } = useSelector((state: AppState) => state.toastMessage);

    return (
        <TransitionablePortal
            open={showMessage}
            onClose={() => dispatch(HideToastMessage())}
            transition={{ animation: "fly left", duration: 500 }}
            closeOnDocumentClick={false}
        >
            <Segment basic className="toast-container">
                <Message compact className="toast-message" positive={success} negative={!success}>
                    {text}
                </Message>
            </Segment>
        </TransitionablePortal>
    );
};
