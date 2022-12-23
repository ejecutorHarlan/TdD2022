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

export const setDate = (date) => {
  return {
    type: SET_DATE,
    payload: {
      date: date,
    },
  };
};

export const getAuto = (client) => {
  return {
    type: GET_AUTO,
    payload: {
      auto: client,
    },
  };
};

export const islogged = () => {
  return {
    type: SET_ISLOGGED,
    payload: {
      islogged: true,
    },
  };
};

export const closeSession = () => {
  return {
    type: CLOSE_SESSION,
    payload: {
      islogged: false,
    },
  };
};

export const showClient = (client) => {
  return {
    type: GET_CLIENT,
    payload: {
      client: client,
    },
  };
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      products: products,
    },
  };
};

export const deleteProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      products: products,
    },
  };
};

export const updateProducts = (products) => {
  return {
    type: UPDATE_PRODUCT,
    payload: {
      products: products,
    },
  };
};

export const showProducts = (products) => {
  return {
    type: SHOW_PRODUCTS,
    payload: {
      products: products,
    },
  };
};

export const setIsLoading = () => {
  return {
    type: SET_ISLOADING,
    isLoadingProducts: true,
  };
};

export const dismissIsLoading = () => {
  return {
    type: DISMISS_ISLOADING,
    isLoadingProducts: false,
  };
};
