import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./Header.css";

export const Header = () => {
    return (
        <header>
            <Menu secondary>
                <Menu.Item header as={Link} to="/" content="React-Redux Toaster" />
            </Menu>
        </header>
    );
};
