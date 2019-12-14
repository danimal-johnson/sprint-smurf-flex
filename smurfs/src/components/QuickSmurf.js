import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const QuickSmurf = props => {
  return (
    <div className="smurf-form">
      <h4>Popular smurf shortcuts</h4>
      <button onClick={() => 
        props.addSmurf( {name: "Smurfette", age: 18, height: "3 apples"})}>Smurfette
      </button>
      <button onClick={() => 
        props.addSmurf( {name: "Handy", age: 24, height: "3.4 apples"})}>Handy
      </button>
      <button onClick={() => 
        props.addSmurf( {name: "Jokey", age: 18, height: "2.8 apples"})}>Jokey
      </button>
      <button onClick={() => 
        props.addSmurf( {name: "Azrael", age: 18, height: "Cat height"})}>Azrael
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

export default connect (mapStateToProps, { addSmurf })(QuickSmurf);