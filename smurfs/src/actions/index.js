import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

// --------- Get Smurfs -------------

export const getSmurfs = () => dispatch => {
  dispatch({type: FETCH_SMURFS_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("RESPONSE:", res.data);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.error("Cannot get smurfs. Response:", err);
      dispatch({type: FETCH_SMURFS_FAILURE, payload: err.response})
    });
}

// ---------- Add Smurf ----------

export const addSmurf = props => dispatch => {
  console.log("addSmurf props:", props);
  dispatch({type: ADD_SMURF_START });

  axios
    .post("http://localhost:3333/smurfs", {
      name: props.name,
      age: props.age,
      height: props.height
    })
    .then(res => {
      console.log("RESPONSE:", res.data);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.error("Cannot add smurf. Response:", err);
      dispatch({type: ADD_SMURF_FAILURE, payload: err.response})
    });
}

// ----------- Delete Smurf -------------

export const deleteSmurf = props => dispatch => {
  console.log("deleteSmurf props:", props);
  dispatch({type: DELETE_SMURF_START });

  axios
    .delete(`http://localhost:3333/smurfs/${props}`)
    .then(res => {
      console.log("RESPONSE:", res.data);
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.error("Cannot add smurf. Response:", err);
      dispatch({type: DELETE_SMURF_FAILURE, payload: err.response})
    });
}