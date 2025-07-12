import { useState } from 'react'
import './App.css';
import AddNote from './AddNote';
import NoteList from './NoteList';

function App() {

  const[showAddNote,setShowAddNote] = useState(false);
  const[notes,setNotes] = useState([]);

  
  return (
      <div className='container'>
          {showAddNote ? 
          (<AddNote  setNotes = {setNotes} setShowAddNote = {setShowAddNote}/>) 
          : (<>
          <h1>My Notes 📝</h1>
          <NoteList notes = {notes} setNotes = {setNotes}/> 
          <button className = "add-btn" onClick={() => setShowAddNote(true)} >+</button>
          </>)
          }
      </div>
  )
}

export default App