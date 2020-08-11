import { createActions, handleActions } from 'redux-actions';

const SAMPLE_ACTION = 'auth/SAMPLE_ACTIONS';

export const sampleActions = createActions(SAMPLE_ACTION);

const initialState = {};

const auth = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState,
);

export default auth;
