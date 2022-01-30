import AddpostReducer from './Reducers/AddPostsReducer'
import AllPostsReducer from './Reducers/AllPostsReducer'
import PersonalInfoReducer from './Reducers/PersonalInfoReducer'
import { combineReducers } from "redux";

const rootReducer= combineReducers({AddpostReducer,AllPostsReducer,PersonalInfoReducer})
export default rootReducer