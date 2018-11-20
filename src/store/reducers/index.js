import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import StoreReducer from './StoreReducer';

export default combineReducers({
    counter: CounterReducer,
    savedList: StoreReducer
});
