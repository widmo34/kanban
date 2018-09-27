import React from 'react';
import PropTypes from 'prop-types';
import NotesContainer from '../Note/NotesContainer';
import { Edit } from '../../components/edit';

// Import Style
import styles from './Lane.css';

const Lane = (props) => {
  const {lane, laneNotes, updateLane, addNote, deleteLane } = props;
  const laneId = lane.id;

  return(
    <div className={styles.Lane}>
      <div className={styles.LaneHeader}>
        <div className={styles.LaneHeader}>
          <button onClick={() => addNote({ task: 'New Note'}, laneId)}>Add note</button>
        </div>
      
      
       <Edit 
          className={styles.LaneName}
          editing={lane.editing}
          value={lane.name}
          onValueClick={() => editLane(lane.id)}

          onUpDate={name => updateLane({...lane, name, editing: false})}
      />
      
      
        <div className={styles.LaneDelete}>
          <button onClick={() => deleteLane(laneId)}>Remove lane</button>
        </div>
      </div>
   

    <NotesContainer 
      notes={laneNotes}
      laneId={laneId}
      />
  </div>
  );
};

Lane.PropTypes = {
  lane: PropTypes.object,
  laneNotes: PropTypes.array,
  addNote: PropTypes.func,
  updateLane: PropTypes.func,
  deleteLane: PropTypes.func,
}

export default Lane;