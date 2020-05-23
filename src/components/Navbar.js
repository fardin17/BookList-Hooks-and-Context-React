import React, {Component} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/AuthContext";

class Navbar extends Component {

    render() {
        return(
            <AuthContext.Consumer>{(authcontext)=>(
         <ThemeContext.Consumer>{(themecontext)=>{
             const {isAuthinticated,toggleAuth}=authcontext;
             const {islightTheme,light,dark}=themecontext;
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

            )
         }}

         </ThemeContext.Consumer>
                )}
            </AuthContext.Consumer>
        );
    }
}

export default Navbar;
