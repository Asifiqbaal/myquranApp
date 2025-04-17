//import { SET_PROGRESS } from './actions';

const initialState = {
  progress: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROGRESS:
      return {
        ...state,
        progress: {
          ...state.progress,
          [action.payload.storyId]: action.payload.progress,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
