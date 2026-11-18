import React, { useState } from 'react'
import Form from "../components/Form"
import { TrashIcon } from 'lucide-react'

export default function Notes({data, onAddNote, onDeleteNote, onSelectNote}) {

  const [showForm, setShowForm] = useState(false)

  const [search, setSearch] = useState("");
  const filteredData = search ? data.filter((el)=> el.title.toLowerCase().includes(search.toLowerCase())) : data
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
          <input onChange={(e) => setSearch(e.target.value)}
           className="border border-gray-300 rounded-2xl px-3 py-1.5"
          type="search" id="search" name="search" placeholder="Search"
          />

        
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
         <Form
         onAddNote={onAddNote}
         onClose={() => setShowForm(false)}
         />

        </div>

       </div>
)}

    {/* Notes List */}
        <div className="flex flex-col gap-2 self-start items-start w-full mt-3 h-100 overflow-auto ">
  {filteredData?.length === 0
  ? <p>Your Note list is empty!</p>
  : filteredData?.map((note) => (

        <div
      key={note.id}
      onClick={() => onSelectNote(note.id)}
      className="bg-gray-100 p-4 rounded-xl w-full cursor-pointer"
    >

  <div className="flex justify-between items-center">
    <h3 className="font-bold">{note?.title}</h3>

    <button
      onClick={(e) => {
      e.stopPropagation();
      onDeleteNote(note.id);
    }}
      className="text-gray-500 hover:text-white hover:bg-red-500 p-1 rounded-md transition-colors"
    >
      <TrashIcon className='size-5'/>
    </button>
  </div>

  <p className="text-gray-600 line-clamp-2">
  {note?.content}
</p>
  <p className="text-gray-600">{note?.date}</p>

</div>
                   ))}

          
        </div>

      {/* Changing to Dynamic */}



      </div>
    </div>
  )
}

