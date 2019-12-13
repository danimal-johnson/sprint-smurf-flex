import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';


const NewSmurf = props => {

  return (
    <div>
      <h4>This should be a form.</h4>
      <button onClick={() => 
        addSmurf( {name: "Smurfette", age: 18, height: "3 apples"})}>Smurfette</button>
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