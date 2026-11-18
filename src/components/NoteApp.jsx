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

  const [selectedNoteId, setSelectedNoteId] = useState(null);

  function addNote(title, content) {

    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
      date: new Date().toLocaleDateString()
}

  setNotes((prevNotes) => [...prevNotes, newNote]);
  }

    function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }
function updateNote(id, updatedData) {
  setNotes(prevNotes =>
    prevNotes.map(note =>
      note.id === id
        ? { ...note, ...updatedData }
        : note
    )
  );
}

function handleSelectNote(id) {
  setSelectedNoteId(id);
}
const selectedNote = notes.find(
  (note) => note.id === selectedNoteId
);

  return (
    // Creating the main div//
    <div className="flex h-screen w-screen">

        {/* Left side of the app */}
        <div>
        <Notes data={notes} onAddNote={addNote}  onDeleteNote={deleteNote} onSelectNote={(id) => handleSelectNote(id)}/>
        </div>


        {/* //Right side of the app// */}
        <div className="flex-1 h-screen">
           <NoteDetail
              note={selectedNote}
              onUpdateNote={updateNote}
            />
        </div>
    </div>
  )
}

