import axios from 'axios'
import { useEffect } from 'react'
import { Button, Grid, Input, Text } from '../elements'

const Main = (props) => {
  // useEffect(() => {
  //   axios.post('/newpost', { content: 'asd', url: 'asd' }).then((res) => {
  //     console.log(res)
  //   })
  // })

  return (
    <>
      <Grid flex>
        <Button>hi!</Button>
        <Input>hi!</Input>
        <Input multiLine>hi!</Input>
        <Text fontSize="26px">hi!</Text>
      </Grid>
    </>
  )
}

export default Main
