import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Loader from 'react-loader-spinner';
import Smurf from './Smurf';

const Village = props => {
  console.log("Village Props:", props);
  useEffect(() => {
    props.getSmurfs();
  },[]);

  return (
    <>
      <div className="village-header">
        <h2>Welcome to Smurf Village.</h2>
      </div>
      <div className="village">
        {
          !props.smurfs &&
          !props.isFetching &&
          <p>Go ahead. Get started.</p>
        }
        {
          props.isFetching && (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
        {props.smurfs && (
          props.smurfs.map(
            smurf => (<Smurf 
              key={smurf.id}
              id={smurf.id}
              name={smurf.name}
              age={smurf.age}
              height={smurf.height} />
              )))
        }
      </div>
    </>
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