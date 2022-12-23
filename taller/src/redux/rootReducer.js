import { combineReducers } from 'redux';

import clientReducer from './Clients/reducer.js';

const rootReducer = combineReducers({
  // product: productReducer,
  //isLog: isLoggedReducer,
  client: clientReducer,
  islogged: clientReducer,
  auto: clientReducer,
  date: clientReducer,
});

export default rootReducer;
