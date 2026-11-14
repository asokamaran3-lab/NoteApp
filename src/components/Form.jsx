

export default function Form({onCancel}) {

 
  return (
    <div className="flex flex-col gap-5">
      {/* Heading */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Create a New Note
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Write down your thoughts and ideas.
        </p>
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
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button 
        type="button"
        onClick={onCancel}
        className="px-5 py-2 rounded-xl border border-red-200
bg-red-50 text-red-600 font-semibold
hover:bg-red-500 hover:text-white hover:border-red-500
hover:shadow-md hover:scale-105
active:scale-95
transition-all duration-300 ease-in-out
cursor-pointer">
          Cancel
        </button>

        <button className="px-5 py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600">
          Save Note
        </button>
      </div>
    </div>
  );
}

  

