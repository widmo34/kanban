import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Lane.css';

class Lane extends Component {
  render() {
    return (
      <div>
        <h1>Hello world !</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Lane.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
