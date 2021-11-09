import * as api from "../../api/index";
import { ActionTypes } from "../constants/action-type";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    dispatch({ type: ActionTypes.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: ActionTypes.CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, updatePost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatePost);
    dispatch({ type: ActionTypes.UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: ActionTypes.DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    console.log("likePost");
    const { data } = await api.likePost(id);
    dispatch({ type: ActionTypes.LIKE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
