import { useState } from "react";
import {X} from "lucide-react"


export default function Form({onAddNote, onClose}) {

    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");
 
  const [form, setForm] = useState({

    title: '',
    content: ''

  });

  return (
    <div className="flex flex-col gap-5">
      {/* Heading */}
      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Create a New Note
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Write down your thoughts and ideas.
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-gray-500 hover:text-white hover:bg-red-500 text-2xl font-bold p-2 rounded-md transition-colors"
        >
          <X/>
        </button>

      </div>

      {/* Title */}
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-sm font-semibold text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter note title"
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          value={form.title}
          onChange={(e) => setForm(prev => ({...prev, title: e.target.value}))}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <label htmlFor="content" className="text-sm font-semibold text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          placeholder="Write your note here..."
          rows="5"
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-400"
          value={form.content}
          onChange={(e) => setForm(prev => ({...prev, content: e.target.value}))}
          
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
   

      <button
       onClick={() => {
       onAddNote(form.title.trim(), form.content.trim());
       onClose();
      }}
        className="px-5 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600"
       >
      Save Note
      </button>
      </div>
    </div>
  );
}

  

