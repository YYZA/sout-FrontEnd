import styled from 'styled-components'
import { Button, Grid, Input, Text } from '../elements'
import { useMutation, useQuery } from 'react-query'
import axios from 'axios'
import { getCookie } from '../shared/Cookie'
import { useEffect, useState } from 'react'

const UserProfile = (props) => {
  const cookie = getCookie('x_auth')
  const [userInfo, setUserInfo] = useState({})
  const [modifyInfo, setModifyInfo] = useState()

  useEffect(() => {
    if (!cookie) {
      alert('로그인 후 이용해주세요.')
      window.location.href = '/'
    }
  }, [])

  const { isLoading, error, data } = useQuery('userinfo', async () => {
    await axios
      .post(
        'http://3.36.100.253/userinfo',
        {},
        {
          headers: { Authorization: cookie },
        }
      )
      .then((res) => {
        setUserInfo(res.data)
      })
  })
  const mutation = useMutation(async () => {
    const cookie = getCookie('x_auth')
    if (modifyInfo === undefined) {
      alert('바뀐 게 없어용...')
      return
    }
    const newUserInfo = {
      email: userInfo.email,
      nickname: userInfo.nickname,
      interest: userInfo.interest,
      password: 'ksdjfklsjdl',
    }

    await axios
      .put('http://3.36.100.253/setting/profile', newUserInfo, {
        headers: { Authorization: cookie },
      })
      .then((res) => {
        alert('수정이 완료되었습니다.')
      })
  })

  return (
    <Grid
      border="1px solid"
      bg="#fff"
      radius="5px"
      height="100%"
      max_width="50vw"
      margin="5vw auto 5vw auto"
      min_height="50%"
      min_width="360px"
      padding="30px 0px"
    >
      <Grid flex padding="16px" margin="20px 0px 0px 0px">
        <Text fontSize="36px" bold>
          Profile
        </Text>
        <ImageBox />
        <Grid margin="10px 0px 0px 0px">
          <Text>아이디</Text>
          <InputBox
            readOnly
            placeholder="아이디"
            value={userInfo.email || ''}
          />
        </Grid>
        <Grid margin="10px 0px 0px 0px">
          <Text>닉네임</Text>
          <InputBox
            placeholder="닉네임"
            onChange={(e) => {
              setModifyInfo({ ...modifyInfo, nickname: e.target.value })
              setUserInfo({ ...userInfo, nickname: e.target.value })
            }}
            value={userInfo.nickname || ''}
          />
        </Grid>
        <Grid margin="10px 0px 0px 0px">
          <Text>관심분야</Text>
          <InputBox
            placeholder="관심분야"
            onChange={(e) => {
              setModifyInfo({ ...modifyInfo, interest: e.target.value })
              setUserInfo({ ...userInfo, interest: e.target.value })
            }}
            value={userInfo.interest || ''}
          />
        </Grid>
        <Grid margin="10px 0px 0px 0px">
          <Text>패스워드</Text>
          <InputBox
            type="password"
            readOnly
            placeholder="패스워드"
            value={userInfo.email || ''}
          />
        </Grid>
        <Grid margin="10px 0px 0px 0px">
          <Button _onClick={mutation.mutate} width="100%" padding="10px">
            수정
          </Button>
        </Grid>
      </Grid>
    </Grid>
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

const ImageBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #bbb;
  margin-top: 20px;
`

export default UserProfile
