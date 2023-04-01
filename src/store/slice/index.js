import { combineReducers } from "redux";
import { homeReducer } from "./home/home.slice";
import { artListReducer,
    artDetailReducer} from './artlist/article.slice'
import {
    videoDetailReducer, videoListReducer
} from './video/video.slice'

const rootReducers = combineReducers({
    homeReducer,
    artListReducer,
    artDetailReducer,
    videoListReducer,
    videoDetailReducer
})
export default rootReducers