import React from 'react';
// import { connect } from 'react-redux';

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
      <button>X</button>
    </div>
  )
}
export default Smurf;