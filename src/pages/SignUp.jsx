import axios from 'axios'
import styled from 'styled-components'
import { Button, Grid, Text } from '../elements'
import { useForm } from 'react-hook-form'
import { history } from '../redux/configureStore'
import { createElement, useEffect, useRef, useState } from 'react'
import { apis } from '../shared/axios'

const SignUp = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    if (data.password !== data.passwordCheck) {
      const passwordCheck = document.querySelector('#passwordCheck')
      passwordCheck.focus()
      passwordCheck.style.border = '1px solid red'
      const tempError = document.querySelector('#temp-error')
      tempError.innerHTML = '동일한 패스워드를 입력하세요.'
      passwordCheck.addEventListener('keydown', () => {
        tempError.innerHTML = ''
      })
      return
    }

    axios
      .post('http://localhost:8080/user/signup', {
        email: data.email,
        nickname: data.nickname,
        interest: data.interest,
        password: data.passwordCheck,
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
                {...register('email', {
                  required: true,
                  pattern:
                    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                })}
              />
              {errors.email?.type === 'required' && (
                <ErrorText>이메일을 입력하세요.</ErrorText>
              )}
              {errors.email?.type === 'pattern' && (
                <ErrorText>이메일 형식을 지켜주세요!</ErrorText>
              )}
            </Grid>
            <Grid margin="10px 0px 0px 0px">
              <Text>Nickname</Text>
              <InputBox
                placeholder="닉네임을 입력해주세요!"
                {...register('nickname', {
                  required: true,
                  pattern:
                    /[^~!@#$%^&*()_+|<>?:{}]?[0-9a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
                })}
              />
              {errors.nickname?.type === 'required' && (
                <ErrorText>닉네임을 입력하세요.</ErrorText>
              )}
              {errors.nickname?.type === 'pattern' && (
                <ErrorText>
                  특수문자를 제외한 영어, 숫자, 한국어를 입력해주세요.!
                </ErrorText>
              )}
            </Grid>
            <Grid margin="10px 0px 0px 0px">
              <Text>Interest</Text>
              <InputBox
                placeholder="관심분야를 입력해주세요!"
                {...register('interest', { required: true })}
              />
              {errors.interest?.type === 'required' && (
                <ErrorText>관심분야를 입력하세요.</ErrorText>
              )}
            </Grid>
            <Grid margin="10px 0px 0px 0px">
              <Text>Password</Text>
              <InputBox
                placeholder="패스워드를 입력해주세요!"
                {...register('password', { required: true, minLength: 4 })}
              />
              {errors.password?.type === 'required' && (
                <ErrorText>패스워드를 입력하세요.</ErrorText>
              )}
              {errors.password?.type === 'minLength' && (
                <ErrorText>패스워드를 4자 이상 입력해주세요.</ErrorText>
              )}
            </Grid>
            <Grid margin="10px 0px 0px 0px">
              <Text>Password check</Text>
              <InputBox
                id="passwordCheck"
                placeholder="패스워드를 확인해주세요!"
                name="password_repeat"
                {...register('passwordCheck', { required: true, minLength: 4 })}
              />
              {errors.passwordCheck?.type === 'required' && (
                <ErrorText>패스워드 확인을 입력하세요.</ErrorText>
              )}
              {errors.passwordCheck?.type === 'minLength' && (
                <ErrorText>패스워드를 4자 이상 입력해주세요.</ErrorText>
              )}
              <ErrorText id="temp-error"></ErrorText>
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

const ErrorText = styled.p`
  font-size: 12px;
  color: red;
  opacity: 0.5;
`

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
