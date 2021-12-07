import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Button, Grid, Input, Text } from '../elements'
import { history } from '../redux/configureStore'
import { userActions } from '../redux/modules/user'

const SignIn = (props) => {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    axios
      .post('/user/login', {
        username: data.email,
        password: data.password,
      })
      .then((res) => {
        document.cookie = 'x_auth' + '=' + res.headers.authorization
        dispatch(
          userActions.setUser({
            username: data.email,
          })
        )
        history.push('/')
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid flex padding="16px">
          <Text fontSize="36px" bold>
            Sign In
          </Text>
          <Grid>
            <Grid margin="10px 0px 0px 0px">
              <Text>E-mail</Text>
              <InputBox
                placeholder="이메일을 입력해주세요!"
                {...register('email')}
              />
            </Grid>
            <Grid margin="10px 0px 0px 0px">
              <Text>Password</Text>
              <InputBox
                placeholder="패스워드를 입력해주세요!"
                {...register('password')}
              />
            </Grid>
            <Grid margin="20px 0px 0px 0px">
              <KakaoButton>카카오로 시작하기</KakaoButton>
              <ButtonContainer flex>
                <Button type="submit" padding="10px" width="100%">
                  로그인
                </Button>
                <Button margin="0px 0px 0px 10px" padding="10px" width="100%">
                  회원가입하러 가기
                </Button>
              </ButtonContainer>
            </Grid>
          </Grid>
        </Grid>
      </form>
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
