import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE } from '../actions';

const initialState = {
  smurfs: null,
  isFetching: false,
  isAdding: false,
  error: ""
}

// Reducer
export const smurfsReducer = (state=initialState, action) => {
  console.log("Reducing:", action.type);
  switch(action.type) {
    case FETCH_SMURFS_START:
      console.log("FETCH START");
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SMURFS_SUCCESS:
      console.log("FETCH SUCCESS");
      console.log("Payload:", action.payload);
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_SMURFS_FAILURE:
      console.log("FETCH FAILURE");
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

      // Adding a new smurf

    case ADD_SMURF_START:
      console.log("ADD START");
      return {
        ...state,
        isAdding: true
      };
    case ADD_SMURF_SUCCESS:
      console.log("ADD SUCCESS");
      console.log("Payload:", action.payload);
      return {
        ...state,
        smurfs: action.payload,
        isAdding: false,
        error: ''
      };
    case ADD_SMURF_FAILURE:
      console.log("ADD FAILURE");
      return {
        ...state,
        isAdding: false,
        error: action.payload
      };
    default:
      console.log("DEFAULT");
      return state;
  }

}

export default smurfsReducer;