import { Button, Grid, Input } from '../elements'

const SignIn = (props) => {
  return (
    <>
      <Grid flex>
        <Grid>
          <Input label="email" placeholder="e-mail을 입력해주세요!" />
          <Input label="password" placeholder="password를 입력해주세요!" />
          <Button>kakao login</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default SignIn
