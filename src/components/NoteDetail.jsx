import { useState } from 'react'
import { CalendarDays, FileText, Pencil, X } from 'lucide-react'

export default function NoteDetail({ note, onUpdateNote })  {

const [isEditing, setIsEditing] = useState(false);
const [formData, setFormData] = useState({
  title: '',
  content: ''
});

function handleEdit() {
  if(!isEditing) {
    setFormData({
      title: note.title,
      content: note.content
    });
  }

  setIsEditing(prev => !prev);
}

function handleSave() {
  onUpdateNote(note.id, formData);
  setIsEditing(false);
}
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full bg-slate-50 p-8">

      {note ? (
      <div className="w-full max-w-3xl min-h-112.5 bg-white rounded-2xl shadow-sm border border-gray-200">
        <header className=' bg-gray-100 w-full rounded-t-lg px-4 py-1'>
          <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2 text-slate-500">
                <FileText size={20} />
                <span className="font-semibold text-sm">My Note</span>
                <div>
                  <button
                      onClick={handleEdit}
                      title="Edit note"
                      className="p-2 rounded-lg cursor-pointer text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      {!isEditing ? <Pencil size={18} className='text-blue-500' /> : <X size={18} className='text-red-500' /> }
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <CalendarDays size={17} />
                <span>{note.date}</span>
              </div>
          </div>
        </header>
      {isEditing ? (
        <div className='p-3 md:p-6'>
          <div className="flex flex-col gap-5">

            {/* Title input */}
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData(prev => ({
                  ...prev,
                  title: e.target.value
                }))
              }
              className="w-full text-xl font-medium text-gray-800 border border-gray-200  rounded-lg p-2 outline-none focus:border-blue-500"
              placeholder="Note title"
            />

              {/* Content textarea */}
              <textarea
                value={formData.content}
                onChange={(e) =>
                  setFormData(prev => ({
                    ...prev,
                    content: e.target.value
                  }))
                }
                className="w-full min-h-64 text-lg text-gray-600 leading-8 resize-none outline-none border border-gray-200 rounded-lg p-4 focus:border-blue-500"
                placeholder="Write your note..."
              />
            <div className="flex justify-end gap-3">

              {/* <button
                onClick={() => setIsEditing(false)}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button> */}

              <button onClick={handleSave}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Update
              </button>

            </div>

          </div>
        </div>
) : (
  <div className='p-3 md:p-6'>
    
    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
      {note.title}
    </h1>

    <div className="border-t border-gray-100 mb-8"></div>

    <p className="text-gray-600 text-lg leading-8 whitespace-pre-wrap">
      {note.content}
    </p>
  </div>
)}
      
    </div>
      ) : (
        <p className="text-lg font-medium">Click on a note to view its details</p>
      )}
      </div>
  )
}
