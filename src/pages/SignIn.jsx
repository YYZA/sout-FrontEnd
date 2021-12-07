import axios from 'axios'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Button, Grid, Input, Text } from '../elements'

const SignIn = (props) => {
  // useEffect(() => {
  //   axios
  //     .post('/user/login', { email: 'test', password: 'test' })
  //     .then((res) => {
  //       console.log(res)
  //     })
  // })

  return (
    <>
      <Grid flex padding="16px">
        <Text fontSize="36px" bold>
          Sign In
        </Text>
        <Grid>
          <Grid margin="10px 0px 0px 0px">
            <Text>E-mail</Text>
            <InputBox placeholder="E-mail을 입력해주세요!" />
          </Grid>
          <Grid margin="10px 0px 0px 0px">
            <Text>Password</Text>
            <InputBox placeholder="패스워드를 입력해주세요!" />
          </Grid>
          <Grid margin="20px 0px 0px 0px">
            <KakaoButton>카카오로 시작하기</KakaoButton>
            <ButtonContainer flex style={{}}>
              <Button padding="10px" width="100%">
                로그인
              </Button>
              <Button margin="0px 0px 0px 10px" padding="10px" width="100%">
                회원가입하러 가기
              </Button>
            </ButtonContainer>
          </Grid>
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
  margin-top: 10px;
`

const KakaoButton = styled.button`
  margin-top: 10px;
  width: 100%;
  background: #fae100;
  padding: 10px;
`

export default SignIn
