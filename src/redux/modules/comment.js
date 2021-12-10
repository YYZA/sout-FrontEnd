import { handleActions } from 'redux-actions'
import axios from 'axios'
import { getCookie } from '../../shared/Cookie'
import { actionCreators as postActions } from './post'

const initialState = {
  comment: null,
  comments: [],
}

const deleteCommentDB = (postId, commentId) => {
  return function (dispatch, getState, { history }) {
    const cookie = getCookie('x_auth')
    axios
      .delete(`http://3.36.100.253/api/${postId}/${commentId}`, {
        headers: {
          Authorization: cookie,
        },
      })
      .then((res) => {
        dispatch(postActions.deleteComment(commentId, postId))
      })
  }
}

const addCommentDB = (postId, content, nickname) => {
  return function (dispatch, getState, { history }) {
    const cookie = getCookie('x_auth')
    axios
      .post(
        `http://3.36.100.253/api/${postId}/comment`,
        { content },
        {
          headers: {
            Authorization: cookie,
          },
        }
      )
      .then((res) => {
        dispatch(postActions.addComment(postId, res.data))
      })
    history.push('/')
  }
}

export default handleActions({}, initialState)

const actionCreators = {
  addCommentDB,
  deleteCommentDB,
}

export { actionCreators }
