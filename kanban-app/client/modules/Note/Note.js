import React, { PropTypes } from 'react';
import styles from './Note.css';

const Note = props  =>  <li className={Styles.Note}>{props.children}</li>;

Note.prop.PropTypes = {
  children: PropTypes.any,
}

export default Note;