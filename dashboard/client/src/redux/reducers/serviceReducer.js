import * as userActions from "../constants/userTypes";

const initialState = {
  service: null,
  error: null,
  load: null,
};
const serviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActions.LOAD_SERVICE:
      return { ...state, load: true };

    case userActions.ADD_SERVICE:
    case userActions.FAIL_SERVICE:
      return {
        ...state,
        error: payload.error,
        load: false,
      };

    default:
      return state;
  }
};
export default serviceReducer;
