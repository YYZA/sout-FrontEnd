import { Search } from '@material-ui/icons'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { Button, Grid, Text } from '../elements'
import { history } from '../redux/configureStore'
import { deleteCookie, getCookie } from '../shared/Cookie'
import { actionCreators as postActions } from '../redux/modules/post'

const Header = (props) => {
  const dispatch = useDispatch()
  const [searchKeyword, setSearchKeyword] = useState('')
  const [viewInput, setViewInput] = useState('')
  const page = useSelector((state) => state.post.searchPage)
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
      {cookie || is_login ? (
        <Grid border side_flex padding="16px">
          <Grid width="auto">
            <Logo
              onClick={() => {
                window.location.reload()
                history.push('/')
              }}
            >
              sout
            </Logo>
          </Grid>
          <Grid width="auto">
            <ContainerBox>
              <Grid width="">
                {viewInput && (
                  <>
                    <ContainerBox>
                      <InputBox onChange={handleChange} className={viewInput} />
                      <SearchText
                        onClick={() =>
                          dispatch(postActions.getPostDB(page, searchKeyword))
                        }
                      >
                        search
                      </SearchText>
                    </ContainerBox>
                  </>
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
                _onClick={() => history.push('/write')}
              >
                글쓰기
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
                  sessionStorage.removeItem('x_auth')
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
          <Logo
            onClick={() => {
              window.location.reload()
              history.push('/')
            }}
          >
            sout
          </Logo>
          <Grid width="auto">
            <ContainerBox>
              <Grid width="">
                {viewInput && (
                  <ContainerBox>
                    <InputBox onChange={handleChange} className={viewInput} />
                    <SearchText
                      onClick={() =>
                        dispatch(postActions.getPostDB(page, searchKeyword))
                      }
                    >
                      search
                    </SearchText>
                  </ContainerBox>
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

const SearchText = styled.p`
  color: #aaa;
  cursor: pointer;
  padding: 10px;
`

const Logo = styled.p`
  cursor: pointer;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;
  font-size: 24px;
`

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
