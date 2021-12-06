import styled from 'styled-components'
import { Button, Grid, Input, Text } from '../elements'

const SignUp = (props) => {
  return (
    <>
      <Grid flex padding="16px">
        <Text fontSize="36px" bold>
          Sign Up
        </Text>
        <Grid>
          <Grid margin="10px 0px 0px 0px">
            <Text>E-mail</Text>
            <InputBox placeholder="이메일을 입력해주세요!" />
          </Grid>
          <Grid margin="10px 0px 0px 0px">
            <Text>Nickname</Text>
            <InputBox placeholder="닉네임을 입력해주세요!" />
          </Grid>
          <Grid margin="10px 0px 0px 0px">
            <Text>Interest</Text>
            <InputBox placeholder="관심분야를 입력해주세요!" />
          </Grid>
          <Grid margin="10px 0px 0px 0px">
            <Text>Password</Text>
            <InputBox placeholder="패스워드를 입력해주세요!" />
          </Grid>
          <Grid margin="10px 0px 0px 0px">
            <Text>Password check</Text>
            <InputBox placeholder="패스워드를 확인해주세요!" />
          </Grid>
          <ButtonContainer flex>
            <Button padding="10px" width="100%">
              가입하기
            </Button>
            <Button padding="10px" margin="0px 0px 0px 10px" width="100%">
              로그인하러 가기
            </Button>
          </ButtonContainer>
        </Grid>
      </Grid>
    </>
  )
}

const InputBox = styled.input`
  border-radius: 5px;
  margin: 10px 0px;
  border: 1px solid #ddc6b6;
  width: 100%;
  padding: 16px 10px;
  box-sizing: border-box;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export default SignUp
