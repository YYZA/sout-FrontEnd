import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";
import { produce } from "immer";

const ADD_COMMENT = "ADD_COMMENT";

const addComment = createAction(ADD_COMMENT, (content) => ({ content }));

const initialState = {
  comment: null,
  comments: [],
};

const cookie = getCookie("x_auth");
const addCommentDB = (postId, content) => {
  return function (dispatch, getState, { history }) {
    const cookie = getCookie("x_auth");
    axios
      .post(
        `http://localhost:8080/api/${postId}/comment`,
        { content },
        {
          headers: {
            Authorization: cookie,
          },
        }
      )
      .then((res) => {
        dispatch(addComment(res.config.data));
      });
    history.push("/");
  };
};

export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment = action.payload.content;
      }),
  },
  initialState
);

const actionCreators = {
  addCommentDB,
};

export { actionCreators };
