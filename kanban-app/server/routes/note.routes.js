import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';
import { notDeepEqual } from 'assert';

const router = new Router();

// Add a mew Note 
router.route('/notes').post(NoteController.addNote);

// Show all notes 
router.route('/notes').get(NoteController.getNotes);

// Delete a single note
router.route('/notes/:noteId').delete(NoteController.deleteNote);

// Edit a name of a single note 
router.route('/notes/:noteId').put(NoteController.editNote);


export default router;
