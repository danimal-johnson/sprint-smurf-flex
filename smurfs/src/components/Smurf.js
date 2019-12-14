import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const Smurf = props => {
  console.log("Smurf Props:", props);

  return (
    <div className="smurf">
      <h4>{props.name}</h4>
      <ul>
        <li>Age: {props.age}</li>
        <li>Height: {props.height}</li>
        <li>ID: {props.id}</li>
      </ul>
      <button onClick={() => (props.deleteSmurf(props.id))}>X</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs.smurfs,
    isFetching: state.smurfs.isDeleting,
    error: state.smurfs.error
  };
}

export default connect(mapStateToProps, { deleteSmurf })(Smurf);