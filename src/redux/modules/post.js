import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";
import { instance } from "../../shared/api";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const EDIT_POST = "EDIT_POST";

const setPost = createAction(SET_POST, (post) => ({
  post,
}));
const addPost = createAction(ADD_POST, (content, url) => ({ content, url }));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const editPost = createAction(EDIT_POST, (content, url, post_id) => ({
  content,
  url,
  post_id,
}));

const initialState = {
  list: [],
};
const cookie = getCookie("x_auth");
const addPostDB = (content, url) => {
  return async function (dispatch, getState, { history }) {
    const cookie = getCookie("x_auth");
    await axios
      .post(
        "http://localhost:8080/newpost",
        { content, url },
        {
          headers: {
            Authorization: cookie,
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(addPost(res.data));
      });
    history.push("/");
  };
};
const deletePostDB = (post_id) => {
  return function (dispatch, getState, { history }) {
    const cookie = getCookie("x_auth");
    axios
      .delete(`http://localhost:8080/api/${post_id}`, {
        headers: {
          Authorization: cookie,
        },
      })
      .then((res) => {
        dispatch(deletePost(post_id));
      });
  };
};

const editPostDB = (content, url, post_id) => {
  return function (dispatch, getState, { history }) {
    const cookie = getCookie("x_auth");
    axios
      .put(
        `http://localhost:8080/newpost/${post_id}`,
        { content, url },
        {
          headers: {
            Authorization: cookie,
          },
        }
      )
      .then((res) => {
        dispatch(editPost(post_id));
      });
  };
};

const getPostDB = () => {
  return async function (dispatch, getState, { history }) {
    await axios
      .get("http://localhost:8080/", {
        params: { page: 0, size: 4 },
        headers: {
          Authorization: cookie,
        },
      })
      .then((res) => {
        console.log(res);
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
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
        console.log(draft.list[idx]);
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
  editPostDB,
  deletePostDB,
};

export { actionCreators };
