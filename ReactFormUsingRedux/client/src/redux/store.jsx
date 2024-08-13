/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */


import {createStore , combineReducers} from 'redux'
import { imagesReducer, mailReducer, nameReducer, numberReducer, passwordReducer } from './reducer.jsx'
import {composeWithDevTools} from 'redux-devtools-extension'

let rootReducer = combineReducers({
    name : nameReducer,
    email : mailReducer,
    number : numberReducer ,
    password : passwordReducer  ,
    image :imagesReducer
})


export const store = createStore(rootReducer ,composeWithDevTools() )

