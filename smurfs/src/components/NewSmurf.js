import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const NewSmurf = props => {
  const [smurfName, setSmurfName] = useState("");
  const [smurfAge, setSmurfAge] = useState("");
  const [smurfHeight, setSmurfHeight] = useState("");

  const handleNameChange = e => {
    e.preventDefault();
    setSmurfName(e.target.value);
  }

  const handleAgeChange = e => {
    e.preventDefault();
    setSmurfAge(e.target.value);
  }

  const handleHeightChange = e => {
    e.preventDefault();
    setSmurfHeight(e.target.value);
  }

  return (
    <div className="smurf-form">

      <h4>Add a new smurf.</h4>
      <input type="text"
        name="smurfName"
        placeholder="Name"
        onChange={handleNameChange}
      />
      <input type="text"
        name="smurfAge"
        placeholder="Age"
        onChange={handleAgeChange}
      />
      <input type="text"
        name="smurfHeight"
        placeholder="Height"
        onChange={handleHeightChange}
      />

      <button
        type="button"
        onClick={() => props.addSmurf( {
          name: smurfName,
          age: smurfAge,
          height: smurfHeight
        })}>Add
      </button>
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

export default connect (mapStateToProps, { addSmurf })(NewSmurf);