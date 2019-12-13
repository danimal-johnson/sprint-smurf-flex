import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

// Async action creator:
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