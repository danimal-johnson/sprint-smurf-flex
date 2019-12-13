import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Loader from 'react-loader-spinner';

const Village = props => {
  console.log("Village Props:", props);

  return (
    <div className="village">
      <h2>This is where all the smurfs live.</h2>
      <button onClick={props.getSmurfs}>Get Smurfs!</button>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs.smurfs,
    isFetching: state.smurfs.isFetching,
    error: state.smurfs.error
  };
}

export default connect (mapStateToProps, { getSmurfs })(Village);