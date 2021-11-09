import { ActionTypes } from "../constants/action-type";
const initialState = {
  posts: [],
  isUpdateSuccess:false
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL:
      return { ...state, posts: action.payload };

    case ActionTypes.CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case ActionTypes.LIKE_POST:
    case ActionTypes.UPDATE_POST:
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post._id === action.payload._id ? action.payload : post
          ),
        ],
        isUpdateSuccess:true
      };
      case ActionTypes.UPDATE_POST_FINISH:
        return{
          ...state,
          isUpdateSuccess:action.payload
        }
    case ActionTypes.DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter((post) => post._id !== action.payload)],
      };
    default:
      return state;
  }
};
