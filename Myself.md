1. Having the System Design (Features - functions - designs - components)
2. Creating the react project through the Terminal Command (npm.cmd create vite@latest)
3. Installing Tailwind through its website Instructions
4. Creating the Git Repository
5. Creating the component folder
6. Define the Data Model (const/object structure) for CRUD App

const note ={
    id: 1,
    title: "My journy"
    content: "planning to travel to Turkey."
    Date: "11-11-2026"
};
7. initialize state. Store and manage our data using useState.
import {useState} from "react"

8. Create your component

    function NoteApp() {

        return (
        <div></div>
        );
    }

    export default NotesApp;


9. initialize your state inside your component

    function NoteApp() {
        const[notes, setNotes] = useState([]);
        return(
            <div>My notes</div>
        );
    }
