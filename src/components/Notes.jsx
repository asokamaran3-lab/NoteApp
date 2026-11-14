import React, { useState } from 'react'
import Form from "../components/Form"

export default function Notes({data}) {

  const [showForm, setShowForm] = useState(false)

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
        
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-400 text-white px-4 py-2 rounded-2xl font-bold cursor-pointer
          hover:bg-blue-600 hover:scale-105 hover:shadow-lg
          transition-all duration-300 ease-in-out
          active:scale-95"
        >
          New
        </button>

        </div>

        {showForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

         <div className="bg-white p-6 rounded-xl shadow-xl w-96">
         <Form onCancel={() => setShowForm(false)} />

        </div>

       </div>
)}

    {/* Notes List */}
        <div className="flex flex-col gap-2 self-start items-start w-full mt-3">
          {data.map((note) => (

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

