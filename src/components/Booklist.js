import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

import {BookContext} from "../contexts/BookContext";
const Booklist = (props) => {
    const {islightTheme,light,dark}=useContext(ThemeContext)
    const theme=islightTheme?light:dark
    const {books,removeBooks}=useContext(BookContext)
    return (
        <div className='book-list' style={{background:theme.bg ,color:theme.syntax}}>
            <ul >
                {books.map(book=>{
                    return(
                        <li key={book.id} style={{background:theme.ui}}
                        onClick={()=>removeBooks(book.id)}
                        >
                            {book.title} --- {book.author}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Booklist;