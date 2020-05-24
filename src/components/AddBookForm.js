import React, {useContext, useState} from 'react';
import {BookContext} from "../contexts/BookContext";
import {ThemeContext} from "../contexts/ThemeContext";

const AddBookForm = () => {
    const {islightTheme,light,dark}=useContext(ThemeContext);
    const theme=islightTheme?light:dark;
    const {dispatch}=useContext(BookContext)
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch({type:'ADD_BOOK',book:{
            title,author
            }})
        setTitle('')
        setAuthor('')
    }
    return (
        <div>
            <form onSubmit={submitHandler} style={{background:theme.bg, color:theme.syntax}}>
                <label>Add new Book</label><br/>
                <input style={{background:theme.ui, color:theme.syntax}}
                    type='text' placeholder='Book name' value={title}onChange={(e)=>setTitle(e.target.value)} /><br/>
                <input style={{background:theme.ui, color:theme.syntax}}
                    type='text' placeholder='Author name' value={author}onChange={(e)=>setAuthor(e.target.value)} /><br/>
                <input style={{background:theme.ui, color:theme.syntax}}
                    type='submit' value='Add Now'/>
            </form>
        </div>
    );
};

export default AddBookForm;