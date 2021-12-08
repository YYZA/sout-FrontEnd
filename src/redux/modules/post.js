import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";
import { instance } from "../../shared/api";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";

const setPost = createAction(SET_POST, (post) => ({
  post,
}));
const addPost = createAction(ADD_POST, (content, url) => ({ content, url }));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));

const initialState = {
  list: [],
};
const cookie = getCookie("x_auth");
const addPostDB = (content, url) => {
  return async function (dispatch, getState, { history }) {
    console.log(cookie);
    await axios
      .post(
        "/newpost",
        { content, url },
        {
          headers: {
            Authorization: cookie,
          },
        }
      )
      .then((res) => {
        dispatch(addPost(res));
      });
    history.push("/");
  };
};
const deletePostDB = (post_id) => {
  return function (dispatch, getState, { history }) {
    axios
      .delete(`/${post_id}`, {
        headers: {
          Authorization: cookie,
        },
      })
      .then((res) => {
        dispatch(deletePost(post_id));
      });
  };
};

const getPostDB = () => {
  return async function (dispatch, getState, { history }) {
    await axios
      .get("/*", {
        params: { page: 0, size: 30 },
        headers: {
          Authorization: cookie,
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(setPost(res.data));
      });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) => {
      return { list: action.payload.post };
    },
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (val) => val.id === action.payload.post_id
        );
        draft.list.splice(idx, 1);
        // draft.list.push(...action.payload.post);
      }),

    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.content);
      }),
  },
  initialState
);

const actionCreators = {
  addPostDB,
  getPostDB,

  deletePostDB,
};

export { actionCreators };
