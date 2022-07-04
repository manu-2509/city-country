import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import { countryReducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    city: countryReducer,
})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));