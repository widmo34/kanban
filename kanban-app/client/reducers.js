/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import lanes from './modules/Lane/LaneReducer';
import notes from './modules/Note/NoteReducer';
import app from './modules/App/AppReducer';
import intl from './modules/Intl/IntlReducer';



// Combine all reducers into one root reducer
export default combineReducers({
 lanes,
 notes,
 app,
 intl
});
