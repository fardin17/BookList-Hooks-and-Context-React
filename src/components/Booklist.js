import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";

import {BookContext} from "../contexts/BookContext";
const Booklist = (props) => {
    const {islightTheme,light,dark}=useContext(ThemeContext)
    const theme=islightTheme?light:dark
    const {books,dispatch}=useContext(BookContext)
    return books.length? (
        <div className='book-list' style={{background:theme.bg ,color:theme.syntax}}>
            <ul >
                {books.map(book=>{
                    return(
                        <li key={book.id} style={{background:theme.ui}}
                        onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}
                        >
                            {book.title} --- {book.author}
                        </li>
                    )
                })}
            </ul>
        </div>
    ):<div className='book-list' style={{background:theme.bg ,color:theme.syntax}}>
      No Books to read. It's time to chill.
    </div>
};

export default Booklist;