// REACT & NODE MODULES
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
// COMPONENTS
import operations from './operations';

// ROOT REDUCER
const rootReducer = combineReducers({operations, routing: routerReducer});
export default rootReducer;
