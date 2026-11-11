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
    {
      id: 2,
      title: 'Studying',
      content: 'Learn to code and web.',
      date: '2023-06-01'
    },]
  )

  return (
    // Creating the main div//
    <div className="flex h-screen w-screen">

        {/* Left side of the app */}
        <div>
        <Notes notes={notes}/>
        </div>


        {/* //Right side of the app// */}
        <div className="flex-1 h-screen">
           <NoteDetail/>
        </div>
    </div>
  )
}

