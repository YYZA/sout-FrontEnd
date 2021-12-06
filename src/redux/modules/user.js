import { handleActions } from 'redux-actions'

const initialState = {
  is_login: false,
  user: [],
}

export default handleActions({}, initialState)
