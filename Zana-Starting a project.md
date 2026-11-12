1. Having the System Design (Features - functions - designs - components)
2. Creating the react project through the Terminal Command (npm.cmd create vite@latest)
3. Installing Tailwind through its website Instructions
4. Creating the Git Repository.
5. Creating the components (the main component connected to app.jsx)
6. Creating the dynamic card by using (useState and passing the props from parent to child component )
7. to create a dynamic card, we need to pass information from dad to child. (parent component to child component)
8. to send information from dad to child, we will have a syntax next to the rendered or imported child component

  <!-- <Notes/> -->
  <!-- <Notes information={notes}/> -->

  component + prop Name + ={the dat data we want to send}

The parent's data is being passed to the child.

"Dear Notes, here are my notes. I will call this information."

9. now the child should receive the data

export default function Notes({ information }) {

syntax export default function({the name of the prop goes here}) {

    return
}

The names must match!
- Parent: information
- Child: information
If you change the parent's prop name, you must change the child's receiving name too.

10. now the child component should use the props through a function called Map

props name + .map +

{information.map((note) => (
  <div key={note.id}>
    <h3>{note.title}</h3>
    <p>{note.content}</p>
    <p>{note.date}</p>
  </div>
))}

This is where your child uses the information received from its parent.

 NoteApp

Creates and stores notes using useState. Sends props/ Notes

Receives information. 3. map()

Reads each note and displays its title, content and date.

5. The golden rule of props
Remember these three things:
1. Parent creates the information.
2. Parent sends the information through props.
3. Child receives and uses the information.

information.map() (looking at the date)
(note) => ( "For every note you find, call that note note and do the following."

 First round: note means Shopping.
Second round: note means Study.

Third round: note means Work.

<div key={note.id}>

Two important things here:
- <div> creates a container for each note.
- key={note.id} gives each note a unique identity.

Why do we need key?

Imagine you have 100 students in a classroom. Each student has a unique student ID.

React also needs to identify each note so it can efficiently understand which notes have changed, been added, or removed.

<h3>{note.title}</h3>
<p>{note.content}</p>
<p>{note.date}</p>