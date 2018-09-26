import React, { PropTypes } from 'react';
import styles from './Note.css';

const Note = props =>
  <li className={styles.Note}>{props.children}</li>;



export default Note;