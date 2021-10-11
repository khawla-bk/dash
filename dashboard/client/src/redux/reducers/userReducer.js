import * as userActions from "../constants/userTypes";

const initState = {
  user: null,
  errors: null,
  isAuth: false,
  load: true,
};

const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case userActions.LOAD_USER:
      return {
        ...state,
        load: false,
      };
    case userActions.REGISTER_USER:
    case userActions.LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.user,
        load: false,
        isAuth: true,
      };
    case userActions.FAIL_USER:
      return {
        ...state,
        errors: payload.errors,
        load: false,
      };
    case userActions.CURRENT_USER:
      return {
        ...state,
        user: payload.user,
        isAuth: true,
        load: false,
      };
    case userActions.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        user: null,
        isAuth: false,
      };

    default:
      return state;
  }
};
export default userReducer;
