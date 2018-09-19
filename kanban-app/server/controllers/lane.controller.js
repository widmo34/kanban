import Lane from '../models/lane';
import Note from '../models/note';
import uuid from 'uuid';


// Add a new lane 
export function addLane(req, res){
 
  if(!req.body.name){
    res.status(403).end();
 }

  const newLane = new Lane(req.body);
 
  newLane.notes = [];
  newLane.id = uuid();
  
  newLane.save((err, saved) => {
    if(err){
      res.status(500).send(err);
    }
    res.json(saved)
  })
}

// Show all lanes 
export function getLanes(req, res){
  Lane.find().exec((err, lanes) => {
    if(err){
      res.status(500).send(err);
    }
    res.json({ lanes });
  })
}

// Delete a single lane and all notes which are added 
export function deleteLane(req, res){
  
 Lane.findOne({ id : req.params.lane }).exec((err, lane) => {
  
  lane.notes.map(note => {
    Note.remove({ _id : note }).exec((err, note) => {
      if(err) throw err;
      console.log(note);     
    })
    
  })
  res.json({ lane })
  lane.remove();
  if(err) throw err;
 })
}

// Edit a name of the lane 
export function editLane(req, res){

  Lane.findOneAndUpdate({id: req.params.laneId}, {name: req.body.name}, {new: true}, function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }

    console.log(doc);
  });
}  



