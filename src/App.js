import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NoteForm from "./Components/NoteForm";
import Notes from "./Components/Notes";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
console.log('what is going on?');
function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Happy little quote",
      body:
        "Talent is a pursued interest. Anything that you're willing to practice, you can do.― Bob Ross "
    }
  ]);

  const addNewNote = note => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      body: note.body
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="App">
      <h1>My Notes</h1>
      aaaaaaaaaaaaaa
      {/* we are going to pass a function down as a prop */}
      <NoteForm addNewNote={addNewNote} />
      <Notes notes={notes} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

