import axios from 'axios'
import { useEffect } from 'react'
import { Button, Grid, Input, Text } from '../elements'
import Post from '../components/Post'
import { getCookie } from '../shared/Cookie'

const Main = (props) => {
  return (
    <>
      <Grid flex>
        <Post />
      </Grid>
    </>
  )
}

export default Main
