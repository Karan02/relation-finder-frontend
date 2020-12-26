import {combineReducers} from "redux"

import people from "./people"
import tag from "./tags"
import relation from "./relation"

export default combineReducers({
    people,
    tag,
    relation
})