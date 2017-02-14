// REACT & NODE MODULES
import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
// COMPONENTS
import rootReducer from './reducers/_index.js';
// DATA
import operations from './_data/operations'

const defaultState = { operations };

const store = createStore(rootReducer, defaultState);
export default store;

export const history = syncHistoryWithStore(browserHistory, store);

// if (module.hot) {
//   module.hot.accept('./reducers/', () => {
//     const nextRootReducer = require('./reducers/_index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }
