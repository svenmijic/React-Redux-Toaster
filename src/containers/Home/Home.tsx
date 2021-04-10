import { Button } from "semantic-ui-react";
import { toast } from "../..";

export const Home = () => {
    const handlePositiveMessage = () => {
        toast("Positive message! Success!", true);
    };

    const handleNegativeMessage = () => {
        toast("Negative message! Oops!", false);
    };

    return (
        <div className="home-container">
            <h2>Click the buttons to generate toast messages!</h2>
            <Button
                size="large"
                positive
                content="Create positive message"
                onClick={handlePositiveMessage}
            />
            <Button
                size="large"
                negative
                content="Create negative message"
                onClick={handleNegativeMessage}
            />
        </div>
    );
};
