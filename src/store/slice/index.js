import { combineReducers } from "redux";
import { homeReducer } from "./home/home.slice";
import { artListReducer,
    artDetailReducer} from './artlist/article.slice'

const rootReducers = combineReducers({
    homeReducer,
    artListReducer,
    artDetailReducer
})
export default rootReducers