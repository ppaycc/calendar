import {combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {phoneBook} from "./reducers";

const rootReduced = combineReducers({
    phoneBook
})

const store = createStore(rootReduced,  applyMiddleware(thunk));

export default store;