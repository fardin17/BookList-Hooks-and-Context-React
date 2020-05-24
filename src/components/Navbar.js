import React, {useContext} from 'react';
import {AuthContext} from "../contexts/AuthContext";
import {ThemeContext} from "../contexts/ThemeContext";

const Navbar = () => {
    const {isAuthinticated,toggleAuth}=useContext(AuthContext)
    const {islightTheme,light,dark}=useContext(ThemeContext);
    const theme=islightTheme?light:dark;
    return (
        <nav style={{background:theme.ui,color:theme.syntax}}>
            <h2>Book List</h2>
            <h3 onClick={toggleAuth}>{isAuthinticated?'Log in':'Log out'}</h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>

    );
};

export default Navbar;