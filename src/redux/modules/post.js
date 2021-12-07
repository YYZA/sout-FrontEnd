import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const NEW_POST = "NEW_POST";

const newPost = createAction(NEW_POST, (post) => ({ post }));

const initialState = {
  list: {
    contents: "",
    url: "",
  },
};

export default handleActions(
  {
    [NEW_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post;
      }),
  },
  initialState
);

const actionCreators = {
  newPost,
};

export { actionCreators };
