import { createStore } from "redux";
import allReducers from "../Reducer/Index";

const store = createStore(allReducers);

export default store;