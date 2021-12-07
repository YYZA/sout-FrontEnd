import produce from 'immer'
import { createAction, handleActions } from 'redux-actions'

const initialState = {
  is_login: false,
  user: [],
}

const SET_USER = 'SET_USER'

const setUser = createAction(SET_USER, (user) => ({ user }))

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = true
        draft.user = action.payload.user
      }),
  },
  initialState
)

const userActions = {
  setUser,
}
export { userActions }
