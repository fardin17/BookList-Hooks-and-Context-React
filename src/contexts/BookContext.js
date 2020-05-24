import React, {createContext, useState} from 'react';
import uuid from "uuid/dist/v4";
export const BookContext=createContext()
const BookContextProvider = (props) => {
    const [books,setBooks]=useState([
        {title:'Basic C++',author:'Fardin' ,id:1},
        {title:'Fundamental Algorithm',author:'Fardin islam',id:2},
        {title:'Fundamental Computer Networks',author:'Islam',id:3}
    ])
    const addBooks=(title,author)=>{
        setBooks([...books,{title,author,id:uuid()}])
    }
    const removeBooks=(id)=>{
        setBooks(books.filter(book => book.id!==id))
    }
    return (
        <BookContext.Provider value={{books,addBooks,removeBooks}}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;