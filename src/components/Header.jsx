import { Search } from '@material-ui/icons'
import _ from 'lodash'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { Button, Grid } from '../elements'
import { history } from '../redux/configureStore'
import { deleteCookie, getCookie } from '../shared/Cookie'
import { useForm } from 'react-hook-form'

const Header = (props) => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [viewInput, setViewInput] = useState('')
  const is_login = useSelector((state) => state.user.is_login)
  let cookie = getCookie('x_auth')
  useEffect(() => {
    if (viewInput === 'closeAnimation') {
      setTimeout(() => {
        setViewInput('')
      }, 500)
    }
  }, [viewInput])

  const _handleChange = (e) => {
    setSearchKeyword(e.target.value)
  }
  const handleChange = _.debounce(_handleChange, 300)

  return (
    <>
      {cookie && is_login ? (
        <Grid border side_flex padding="16px">
          <Grid width="auto">logo</Grid>
          <Grid width="auto">
            <ContainerBox>
              <Grid width="">
                {viewInput && (
                  <InputBox onChange={handleChange} className={viewInput} />
                )}
              </Grid>
              <Button
                bg="#fff"
                _onClick={() => {
                  setViewInput(
                    viewInput === 'openAnimation'
                      ? 'closeAnimation'
                      : 'openAnimation'
                  )
                }}
              >
                <Search style={{ verticalAlign: 'middle' }} />
              </Button>

              <Button
                padding="10px"
                margin="0px 0px 0px 10px"
                _onClick={() => history.push('/profile')}
              >
                프로필
              </Button>
              <Button
                padding="10px"
                margin="0px 0px 0px 10px"
                _onClick={() => {
                  deleteCookie('x_auth')
                  window.location.reload()
                }}
              >
                로그아웃
              </Button>
            </ContainerBox>
          </Grid>
        </Grid>
      ) : (
        <Grid border side_flex padding="16px">
          <Grid width="auto">logo</Grid>
          <Grid width="auto">
            <ContainerBox>
              <Grid width="">
                {viewInput && (
                  <InputBox onChange={handleChange} className={viewInput} />
                )}
              </Grid>
              <Button
                bg="#fff"
                _onClick={() => {
                  setViewInput(
                    viewInput === 'openAnimation'
                      ? 'closeAnimation'
                      : 'openAnimation'
                  )
                }}
              >
                <Search style={{ verticalAlign: 'middle' }} />
              </Button>

              <Button
                padding="10px"
                margin="0px 0px 0px 10px"
                _onClick={() => history.push('/signin')}
              >
                로그인
              </Button>
              <Button
                padding="10px"
                margin="0px 0px 0px 10px"
                _onClick={() => history.push('/signup')}
              >
                회원가입
              </Button>
            </ContainerBox>
          </Grid>
        </Grid>
      )}
    </>
  )
}

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const openControl = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 150px;
  }
`
const closeControl = keyframes`
  from {
    width: 150px;
  }
  to {
    width: 0px;
  }
`

const InputBox = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.lightgrey};
  border-radius: 5px;
  &.openAnimation {
    animation: ${openControl} 0.5s alternate;
  }
  &.closeAnimation {
    animation: ${closeControl} 0.5s linear;
  }
`

export default Header
