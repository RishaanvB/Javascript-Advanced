import isLoggedReducer from "./isLogged";
import counterReducer from "./counter";
import { combineReducers } from "redux"


const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedIn: isLoggedReducer
})

export default allReducers