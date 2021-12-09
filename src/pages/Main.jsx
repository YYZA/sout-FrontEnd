import React, { useEffect } from 'react'
import { Grid } from '../elements'
import Post from '../components/Post'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../redux/modules/post'
import axios from 'axios'
import { getCookie } from '../shared/Cookie'
import { userActions } from '../redux/modules/user'

const Main = (props) => {
  const post_list = useSelector((state) => state)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    dispatch(actionCreators.getPostDB())
    const cookie = getCookie('x_auth')
    const fetchUser = async () => {
      await axios
        .post(
          'http://localhost:8080/userinfo',
          {},
          {
            headers: { Authorization: cookie },
          }
        )
        .then((res) => {
          dispatch(userActions.setUser(res.data))
        })
    }
    if (user.length === 0 && cookie !== undefined) {
      fetchUser()
    }
  }, [dispatch, user.length, props.history])

  return (
    <React.Fragment>
      <Grid flex>
        {post_list.post.list.map((p, idx) => {
          if (p.email === user.username) {
            return (
              <Grid key={idx}>
                <Post {...p} is_me />
              </Grid>
            )
          } else {
            return (
              <Grid key={idx}>
                <Post {...p} />
              </Grid>
            )
          }
        })}
      </Grid>
    </React.Fragment>
  )
}

export default Main
