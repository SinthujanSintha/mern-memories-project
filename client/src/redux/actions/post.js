import * as api from "../../api/index"
import {ActionTypes} from "../constants/action-type";

export const getPosts = () => async (dispatch) => {

    try {
        const {data} = api.fetchPost()
        dispatch({type: ActionTypes.FETCH_ALL, payload: data})

    } catch (error) {
        console.log(error.message)
    }


}

export const createPost =(post)=> async (dispatch)=>{
    try {
        const {data} =api.createPost(post)
        console.log('the dispatch data:',data)
        dispatch({type:ActionTypes.CREATE_POST, payload:data})
    } catch (error) {
        console.log(error.message)
    }
}