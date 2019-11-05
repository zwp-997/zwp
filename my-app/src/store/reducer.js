import {combineReducers} from  'redux'
import  headReducer from  './../commponents/head/store/headReducer'
import homeReducer from './../commponents/home/store/homeReducer'
export default combineReducers({
    head:headReducer,
    home:homeReducer
})