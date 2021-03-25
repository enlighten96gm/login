import { loginReducer } from "./login-reducer";
import { logoutReducer } from "./logout-reducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    logout: logoutReducer,
    login: loginReducer,
})


let store = createStore(reducers)

export default store