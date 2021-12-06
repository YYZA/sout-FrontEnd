import { Button, Grid, Input, Text } from '../elements'

const Main = (props) => {
  return (
    <>
      <Grid flex>
        <Button>hi!</Button>
        <Input>hi!</Input>
        <Input multiLine>hi!</Input>
        <Text color="red" fontSize="26px">
          hi!
        </Text>
      </Grid>
    </>
  )
}

export default Main
