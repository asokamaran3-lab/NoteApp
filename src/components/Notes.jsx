import React from 'react'

export default function Notes({notes}) {

  return (

    
    <div className="border-r border-gray-100 h-screen w-80 shadow-lg pt-6 px-4" >

    {/* The container */}
      <div className="flex flex-col justify-center items-stretch gap-3">

    {/* Project Title and Logo */}
        <div className="flex gap-2 self-start items-center">
        <img className="w-15 h-15 object-contain" src="aso-notebook.png" alt="Aso Notebook" />
        <h1 className="text-2xl font-bold">Aso Notes</h1>
        </div>

    {/* Search input and New BUTTON */}
        <div className="flex gap-2 self-start items-center">
        <input className="border border-gray-300 rounded-2xl px-3 py-1.5" type="search" id="search" name="search" placeholder="Search"/>
        <button className="bg-blue-400 text-white px-4 py-2 rounded-2xl font-bold cursor-pointer">New</button>
        </div>

    {/* Notes List */}
        <div className="flex flex-col gap-2 self-start items-start w-full mt-3">
          {notes.map((note) => (

         <div key={note.id} className="bg-gray-100 p-4 rounded-xl cursor-pointer w-full">
          <h3 className="font-bold">{note.title}</h3>
          <p className="text-gray-600">{note.content}</p>
          <p className="text-gray-600">{note.date}</p>
         </div>
          ))};

          
        </div>

      {/* Changing to Dynamic */}



      </div>
    </div>
  )
}

