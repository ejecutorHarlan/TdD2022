import {
  SHOW_PRODUCTS,
  SET_PRODUCTS,
  SHOW_ONE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  SET_ISLOADING,
  DISMISS_ISLOADING,
  GET_CLIENT,
  SET_ISLOGGED,
  CLOSE_SESSION,
  GET_AUTO,
  SET_DATE,
} from './types.js';

const INITIAL_STATE = {
  client: {},
  islogged: false,
  auto: {},
  date: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };

    case GET_AUTO:
      return {
        ...state,
        auto: action.payload,
      };
    case CLOSE_SESSION:
      return {
        ...state,
        islogged: action.payload,
      };
    case SET_ISLOGGED:
      return {
        ...state,
        islogged: action.payload,
      };
    case GET_CLIENT:
      return {
        ...state,
        client: action.payload,
      };
    case SHOW_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case SET_ISLOADING:
      return {
        ...state,
        isLoadingProducts: true,
      };
    case DISMISS_ISLOADING:
      return {
        ...state,
        isLoadingProducts: false,
      };

    default:
      return state;
  }
};

export default reducer;
