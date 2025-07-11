import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const[notes,setNotes] = useState([]);
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
  }

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/notes/${id}`,{
      method : 'DELETE',
    });

    setNotes(notes.filter(note => note._id !== id));
  }
  return (
      <div className='container'>
          <h1>My Notes 📝</h1>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Title'value={title} onChange={(e)=>setTitle(e.target.value)}required/>
            <textarea placeholder='Content'  value={content} onChange={(e) => setContent(e.target.value)}required></textarea>
            <button type='submit' >Add Note</button>
          </form>

          <ul>
            {notes.map((note) => <li key={note._id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button onClick={() => handleDelete(note._id)}>Delete</button>
            </li>)}
          </ul>
      </div>
  )
}

export default App