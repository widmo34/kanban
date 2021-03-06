import Note from '../models/note';
import Lane from '../models/lane';
import uuid from 'uuid';

export function getSomething(req, res) {
  return res.status(200).end();
}


// Show all notes 
export function getNotes(req, res){
  Note.find().exec((err, notes) => {
    if(err){
      res.status(500).send(err);
    }
    res.json({ notes });
  })
}


// Create a single note 
export function addNote(req, res){
  const { note, laneId } = req.body;


   console.log(note.task, laneId); 
  if(!note || !note.task || !laneId){
    res.status(400).end();
    console.log('erro 29 ')
  }

  const newNote = new Note({
    task: note.task
  })

    newNote.id = uuid();
    newNote.save((err, saved) => {
        if(err){
          res.status(500).send(err);
        }
      console.log(laneId);  
      Lane.findOne({ id: laneId })
        .then(lane => {
          console.log(lane); 
          lane.notes.push(saved);
          return lane.save();
        })
        .then(() => {
          console.log('działa'); 
          res.json(saved);
        })
        
    }
  )
}

// Remove a single note 
export function deleteNote(req, res){
  Note.findOne({ id: req.params.noteId }).exec((err, note) => {
    if(err){
      res.status(500).send(err);
    }

    note.remove(() => {
      console.log('The note is deleted now')
      res.status(200).end();
    })

  })
}

// Edit a name of a note 
export function editNote(req, res){

  Note.findOneAndUpdate({id: req.params.noteId}, {task: req.body.name}, {new: true}).exec((err, note) => {
    if(err) throw err;
    res.json({ note });
  })
    
}  