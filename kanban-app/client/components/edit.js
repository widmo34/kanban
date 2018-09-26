import React, { Component, PropTypes } from 'react';

export default class Edit extends Component {
    checkEnter = (e) => {
        if(e.key === 'Enter'){
            this.finishEdit(e);
        }
    }

    finishEdit = (e) => {
        const value = e.targer.value;

        if(this.props.onUpDate){
            this.props.onUpDate(value.trim());
        }
    }

    renderDelete = () => {
        return <button className={styles.delete} onClick={this.props.onDelete}>x</button>
    }

    renderValue = () => {
        const{ value, onDelete, onValueClick} = this.props;

        return (
            <div>
                <span className={styles.value} onClick={onValueClick}>{value}</span>
                {onDelete ? this.renderDelete() : null}
            </div>
        )

    }

    renderEdit = () => {
        return (
            <input 
            text="text"
            autoFocus
            defaultValue={this.props.value}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter}
            />
        )
    }

    render(){
        return (
            <div className={this.props.className}>
                {this.props.editing ? this.renderEdit() : this.renderValue()}
            </div>
        )

    }

}

Edit.propTypes = {
    value: PropTypes.string,
    onUpdate: PropTypes.func,
    onValueClick: PropTypes.func,
    onDelete: PropTypes.func,
    editing: PropTypes.bool,
  };