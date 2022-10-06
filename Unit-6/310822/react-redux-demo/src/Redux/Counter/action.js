import {INCREMENT } from "./actionType"


export const increaseCount = (data) => ({
    type: INCREMENT,
    payload:data,
})