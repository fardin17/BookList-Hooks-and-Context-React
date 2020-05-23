import React, {Component} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

class Booklist extends Component {
    static contextType=ThemeContext
    render() {
        const {islightTheme,light,dark}=this.context
        const theme=islightTheme?light:dark
        return (
            <div className='book-list' style={{background:theme.bg ,color:theme.syntax}}>
                <ul >
                    <li style={{background:theme.ui}}>Basic C++</li>
                    <li style={{background:theme.ui}}>Fundamental Algorithm</li>
                    <li style={{background:theme.ui}}>Fundamental Computer Networks</li>
                </ul>
            </div>
        );
    }
}

export default Booklist;