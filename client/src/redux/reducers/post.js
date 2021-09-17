import {ActionTypes} from "../constants/action-type";

export const postReducer=(posts=[] ,action)=>{
    switch (action.type) {
        case ActionTypes.FETCH_ALL:
            return action.payload
        case ActionTypes.CREATE_POST:
            return [...posts,action.payload]
        default:
            return posts

    }
}