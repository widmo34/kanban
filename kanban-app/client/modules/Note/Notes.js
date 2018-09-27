import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
// import styles from './Notes.css';
import Edit from '../../components/edit';
import { updateNote, deleteNote, editNote } from './NoteActions';

const Notes = ({ notes, laneId, editNote, updateNote, deleteNote }) => {
    return(
        <ul className="notes">
        
        {notes.map((note) => {
            <Note
                id={note.id}
                key={note.id}
                editing={note.editing}
            >
           <Edit
            editing={note.editing}
            value={note.task}
            onValueClick={() => editNote(note.id)}
            onUpdate={(task) => updateNote({
                ...note,
                task,
                editing: false,
            })}
            onDelete={() => deleteNote(note.id, laneId)}
            />           
            </Note>    
        
        })}

        </ul>
    )
}

Notes.propTypes= {
    deleteNote: PropTypes.func,
    updateNote: PropTypes.func,
    laneId: PropTypes.string,
    editNote: PropTypes.func,
    notes: PropTypes.array,
}

export default Notes;

