import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a mew Note 
router.route('/notes').post(NoteController.addNote);

// Show all notes 
router.route('/notes').get(NoteController.getNotes);

// Delete a single note
router.route('/notes/:noteId').delete(NoteController.deleteNote);


export default router;
