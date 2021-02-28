import {combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {calendar} from "./reducers";

const rootReduced = combineReducers({
    calendar
})

const store = createStore(rootReduced,  applyMiddleware(thunk));

export default store;