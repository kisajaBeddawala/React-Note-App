import React from 'react'
import { useState,useEffect } from 'react';
import './App.css'

const AddNote = ({setNotes,setShowAddNote}) => {
    //   const[notes,setNotes] = useState([]);
      const[title,setTitle] = useState("");
      const[content,setContent] = useState("");

      useEffect(() => {
        fetch('http://localhost:5000/api/notes')
        .then(res => res.json())
        .then(data => setNotes(data));
      },[]);

      const handleSubmit = async (e) =>{
        e.preventDefault();
    
        await fetch('http://localhost:5000/api/notes',{
          method : 'POST',
          headers : {'Content-Type' : 'application/json'},
          body : JSON.stringify({title,content}),
        })
        setTitle("");
        setContent("");
    
        const res = await fetch('http://localhost:5000/api/notes');
        const data = await res.json();
    
        setNotes(data);
        setShowAddNote(false);
      }
  return (
    <div className='add-note-page'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Title'value={title} onChange={(e)=>setTitle(e.target.value)}required/>
            <textarea placeholder='Content'  value={content} onChange={(e) => setContent(e.target.value)}required></textarea>
            <button type='submit' >Add Note</button>
        </form>
    </div>
  )
}

export default AddNote