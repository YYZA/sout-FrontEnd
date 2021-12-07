import axios from 'axios'
import styled from 'styled-components'
import { Button, Grid, Text } from '../elements'
import { useForm } from 'react-hook-form'
import { history } from '../redux/configureStore'

const SignUp = (props) => {
  const { register, handleSubmit } = useForm()
  // 닉네임 중복되면 서버 꺼짐
  // useEffect(() => {
  //   axios
  //     .post('/user/signup', {
  //       email: 'test',
  //       nickname: 'qqq',
  //       interest: 'asd',
  //       password: 'test',
  //     })
  //     .then((res) => {
  //       console.log(res)
  //     })
  // })
  const onSubmit = (data) => {
    if (data.password !== data.passwordCheck) {
      return
    }

    axios
      .post('/user/signup', {
        email: data.email,
        nickname: data.nickname,
        interest: data.interest,
        password: data.password,
      })
      .then((res) => history.push('/signin'))
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid flex padding="16px" margin="20px 0px 0px 0px">
          <Text fontSize="36px" bold>
            Sign Up
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
              <Text>Nickname</Text>
              <InputBox
                placeholder="닉네임을 입력해주세요!"
                {...register('nickname')}
              />
            </Grid>
            <Grid margin="10px 0px 0px 0px">
              <Text>Interest</Text>
              <InputBox
                placeholder="관심분야를 입력해주세요!"
                {...register('interest')}
              />
            </Grid>
            <Grid margin="10px 0px 0px 0px">
              <Text>Password</Text>
              <InputBox
                placeholder="패스워드를 입력해주세요!"
                {...register('password')}
              />
            </Grid>
            <Grid margin="10px 0px 0px 0px">
              <Text>Password check</Text>
              <InputBox
                placeholder="패스워드를 확인해주세요!"
                {...register('passwordCheck')}
              />
            </Grid>
            <ButtonContainer flex>
              <Button padding="10px" width="100%" type="submit">
                가입하기!
              </Button>
              <Button
                padding="10px"
                margin="0px 0px 0px 10px"
                width="100%"
                _onClick={() => history.push('/signin')}
              >
                로그인하러 가기
              </Button>
            </ButtonContainer>
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
  margin-top: 20px;
`

export default SignUp
