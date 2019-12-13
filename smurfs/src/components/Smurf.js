import React from 'react';
// import { connect } from 'react-redux';

const Smurf = props => {
  console.log("Smurf Props:", props);

  return (
    <div className="smurf">
      <h4>This is a smurf</h4>
    </div>
  )
}

export default Smurf;