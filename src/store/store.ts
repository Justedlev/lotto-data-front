import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { rootReducers } from "./redusers-combiner";

export const store = createStore(rootReducers, applyMiddleware(thunk));