import React, {useContext, useState} from 'react';
import {BookContext} from "../contexts/BookContext";
import {ThemeContext} from "../contexts/ThemeContext";

const AddBookForm = () => {
    const {islightTheme,light,dark}=useContext(ThemeContext);
    const theme=islightTheme?light:dark;
    const {addBooks}=useContext(BookContext)
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        addBooks(title,author)
        setTitle('')
        setAuthor('')
    }
    return (
        <div>
            <form onSubmit={submitHandler} style={{background:theme.bg, color:theme.syntax}}>
                <label>Add new Book</label><br/>
                <input style={{background:theme.ui, color:theme.syntax}}
                    type='text' onChange={(e)=>setTitle(e.target.value)} required/><br/>
                <input style={{background:theme.ui, color:theme.syntax}}
                    type='text' onChange={(e)=>setAuthor(e.target.value)} required/><br/>
                <input style={{background:theme.ui, color:theme.syntax}}
                    type='submit' value='Add Now'/>
            </form>
        </div>
    );
};

export default AddBookForm;