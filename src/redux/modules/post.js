import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const NEW_POST = "NEW_POST";

const newPost = createAction(NEW_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

export default handleActions(
  {
    [NEW_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action);
        draft.list.unshift(action.post);
      }),
  },
  initialState
);

const actionCreators = {
  newPost,
};

export { actionCreators };
