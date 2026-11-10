import React from 'react'
import Notes from './Notes'
import NoteDetail from './NoteDetail'




export default function NoteApp() {
  return (
    // Creating the main div//
    <div className="flex">

        {/* Left side of the app */}
        <div>
        <Notes/>
        </div>


        {/* //Right side of the app// */}
        <div>
           <NoteDetail/>
        </div>
    </div>
  )
}

