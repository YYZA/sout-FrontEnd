import axios from 'axios'
import React, { useEffect } from 'react'
import { Button, Grid, Input, Text } from '../elements'
import Post from '../components/Post'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../redux/modules/post'
import { getCookie } from '../shared/Cookie'
const cookie = getCookie('x_auth')

const Main = (props) => {
  const post_list = useSelector((state) => state.post.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionCreators.getPostDB())
  }, [])

  return (
    <React.Fragment>
      <Grid flex>
        {post_list.map((p, idx) => {
          console.log(p)
          return (
            <Grid key={idx}>
              <Post {...p} />
            </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

export default Main
