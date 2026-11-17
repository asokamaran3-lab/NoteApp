import { useState } from 'react'
import Notes from './Notes'
import NoteDetail from './NoteDetail'




export default function NoteApp() {

  const [notes, setNotes] = useState(
    [{
      id: 1,
      title: 'Shopping',
      content: 'Going to the store',
      date: '2023-06-01'
    },
  ]
  )

  function addNote(title, content) {

    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
      date: new Date().toLocaleDateString()
}

  setNotes([...notes, newNote])
  }

    function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    // Creating the main div//
    <div className="flex h-screen w-screen">

        {/* Left side of the app */}
        <div>
        <Notes data={notes} onAddNote={addNote}  onDeleteNote={deleteNote}/>
        </div>


        {/* //Right side of the app// */}
        <div className="flex-1 h-screen">
           <NoteDetail/>
        </div>
    </div>
  )
}

