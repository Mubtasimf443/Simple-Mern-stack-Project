 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */


import React from 'react'
import { actions } from './actions'

function addName(params) {
    return {
        type : actions.ADD_NAME,
        name : params
    }
}
function addEmail(params) {
    return {
        type : actions.ADD_EMAIL,
        email : params
    }
}
function addNumber(params) {
    return {
        type : actions.ADD_NUMBER,
        number : params
    }
}
function addpassword(params) {
    return {
        type : actions.Add_PASSWORD,
        password : params
    }
}
function addiMAGE(file) {
    let url = URL.createObjectURL(file)

    return {
        type : actions.ADD_IMAGE,
       file, url
    }
}


export {addiMAGE ,addpassword,addName ,addEmail ,addNumber}














