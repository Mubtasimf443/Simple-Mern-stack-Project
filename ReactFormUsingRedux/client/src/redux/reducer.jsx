 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */

import { actions } from "./actions.jsx";

let emtyString = ''
let emtyArr =[]

export let nameReducer = (state = emtyString, action) => {
    switch (action.type) {
        case actions.ADD_NAME: return action.name
        default: return state 
    }

}
export  let mailReducer = (state = emtyString, action) => {
    switch (action.type) {
        case actions.ADD_EMAIL: return action.email
        default: return state 
    }

}
export let numberReducer = (state = emtyString, action) => {
    switch (action.type) {
        case actions.ADD_NUMBER: return action.number
        default: return state 
    }

}

export let passwordReducer = (state = emtyString, action) => {
    switch (action.type) {
        case actions.Add_PASSWORD: return action.password
        default: return state 
    }

}
export let imagesReducer = (state = emtyArr, action) => {
    let {file , url}= action;
    switch (action.type) {
        case actions.ADD_IMAGE: return [...state , {file , url }]
        default: return state 
    }

}



