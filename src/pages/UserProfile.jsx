import styled from 'styled-components'
import { Button, Grid, Input, Text } from '../elements'

const UserProfile = (props) => {
  return (
    <>
      <Grid flex padding="16px">
        <Text fontSize="36px" bold>
          Profile
        </Text>
        <ImageBox />
        <Grid margin="10px 0px 0px 0px">
          <Text>닉네임</Text>
          <Input placeholder="닉네임" />
        </Grid>
        <Grid margin="10px 0px 0px 0px">
          <Text>관심분야</Text>
          <Input placeholder="관심분야" />
        </Grid>
        <Grid margin="10px 0px 0px 0px">
          <Text>패스워드</Text>
          <Input placeholder="패스워드" />
        </Grid>
        <Grid margin="10px 0px 0px 0px">
          <Button width="100%" padding="10px">
            수정
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

const ImageBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #bbb;
  margin-top: 20px;
`

export default UserProfile
