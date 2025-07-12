import React from 'react'
import { useEffect } from 'react';
import './App.css'

const NoteList = ({notes,setNotes}) => {

//   const[notes,setNotes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/notes')
        .then(res => res.json())
        .then(data => setNotes(data));
    },[]);

    const handleDelete = async (id) => {
        await fetch(`http://localhost:5000/api/notes/${id}`,{
          method : 'DELETE',
        });
    
        setNotes(notes.filter(note => note._id !== id));
    }

  return (
        <div className="note-list">
            {notes.map((note) => <div className='note' key={note._id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button onClick={() => handleDelete(note._id)}>Delete</button>
            </div>)}
        </div> 
  )
}

export default NoteList