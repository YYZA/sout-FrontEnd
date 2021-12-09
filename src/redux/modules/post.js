import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import axios from 'axios'
import { getCookie } from '../../shared/Cookie'

const SET_POST = 'SET_POST'
const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const EDIT_POST = 'EDIT_POST'
const LOADING = 'LOADING'
const IS_NEXT = 'IS_NEXT'
const ADD_PAGE = 'ADD_PAGE'
const SET_NEW_POST = 'SET_NEW_POST'
const SEARCH_NEXT = 'SEARCH_NEXT'

const setPost = createAction(SET_POST, (post) => ({
  post,
}))
const addPost = createAction(ADD_POST, (content, url) => ({ content, url }))
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }))
const loading = createAction(LOADING, (is_loading) => ({ is_loading }))
const editPost = createAction(EDIT_POST, (content, url, post_id) => ({
  content,
  url,
  post_id,
}))
const setIsNext = createAction(IS_NEXT, (is_next) => ({ is_next }))
const addPage = createAction(ADD_PAGE, (page) => ({ page }))
const setNewPost = createAction(SET_NEW_POST, (post) => ({ post }))
const searchNext = createAction(SEARCH_NEXT, (search_next) => ({ search_next }))

const initialState = {
  list: [],
  is_loading: false,
  page: 0,
  searchPage: 0,
  is_next: undefined,
  search_next: undefined,
}
const cookie = getCookie('x_auth')
const addPostDB = (content, url) => {
  return async function (dispatch, getState, { history }) {
    const cookie = getCookie('x_auth')
    await axios
      .post(
        'http://localhost:8080/newpost',
        { content, url },
        {
          headers: {
            Authorization: cookie,
          },
        }
      )
      .then((res) => {
        console.log(res)
        dispatch(addPost(res.data))
      })
    history.push('/')
  }
}
const deletePostDB = (post_id) => {
  return function (dispatch, getState, { history }) {
    const cookie = getCookie('x_auth')
    axios
      .delete(`http://localhost:8080/api/${post_id}`, {
        headers: {
          Authorization: cookie,
        },
      })
      .then((res) => {
        console.log(res)
        dispatch(deletePost(post_id))
      })
  }
}

const editPostDB = (content, url, post_id) => {
  return function (dispatch, getState, { history }) {
    const cookie = getCookie('x_auth')
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
        dispatch(editPost(post_id))
      })
  }
}

const getPostDB = (page, keyword = null) => {
  return async function (dispatch, getState, { history }) {
    dispatch(loading(true))
    if (keyword !== null) {
      await axios
        .get('http://localhost:8080/search', {
          params: { keyword: keyword, page: page, size: 3 },
        })
        .then((res) => {
          dispatch(addPage(page))
          console.log(res)
          if (res.data.length === 3) {
            dispatch(searchNext(true))
            dispatch(setNewPost(res.data))
          } else {
            dispatch(searchNext(false))
            dispatch(setNewPost(res.data))
          }
        })
    } else {
      await axios
        .get('http://localhost:8080/', {
          params: { page: page, size: 3 },
          headers: {
            Authorization: cookie,
          },
        })
        .then((res) => {
          dispatch(addPage(page))
          if (res.data.length === 3) {
            dispatch(setIsNext(true))
            dispatch(setPost(res.data))
          } else {
            dispatch(setIsNext(false))
            dispatch(setPost(res.data))
          }
        })
    }
  }
}

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.post)
      }),
    [SET_NEW_POST]: (state, action) =>
      produce(state, (draft) => {
        if (state.searchPage === 0) {
          draft.list = action.payload.post
        } else {
          draft.list.push(...action.payload.post)
        }
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (val) => val.id === action.payload.post_id
        )
        draft.list.splice(idx, 1)
        // draft.list.push(...action.payload.post);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id)
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post }
        console.log(draft.list[idx])
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.content)
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading
      }),
    [IS_NEXT]: (state, action) =>
      produce(state, (draft) => {
        draft.is_next = action.payload.is_next
      }),
    [SEARCH_NEXT]: (state, action) =>
      produce(state, (draft) => {
        draft.search_next = action.payload.search_next
      }),
    [ADD_PAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.page = action.payload.page + 1
      }),
  },
  initialState
)

const actionCreators = {
  addPostDB,
  getPostDB,
  editPostDB,
  deletePostDB,
}

export { actionCreators }
