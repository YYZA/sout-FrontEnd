import React, { useEffect } from 'react'
import { Grid } from '../elements'
import Post from '../components/Post'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../redux/modules/post'

const Main = (props) => {
  const post_list = useSelector((state) => state)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    dispatch(actionCreators.getPostDB())
  }, [dispatch])

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
