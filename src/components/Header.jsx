import { Search } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Button, Grid } from '../elements'
import { history } from '../redux/configureStore'

const Header = (props) => {
  const [viewInput, setViewInput] = useState('')
  useEffect(() => {
    if (viewInput === 'closeAnimation') {
      setTimeout(() => {
        setViewInput('')
      }, 500)
    }
  }, [viewInput])
  return (
    <>
      <Grid side_flex padding="16px">
        <Grid width="auto">logo</Grid>
        <Grid width="auto">
          <ContainerBox>
            <Grid width="">
              {viewInput && <InputBox className={viewInput} />}
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
