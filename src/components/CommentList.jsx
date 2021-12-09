import React from 'react'
import styled from 'styled-components'
import { Button, Grid, Input, Text } from '../elements'

const CommentList = (props) => {
  let comment_list = props.commentList
  // console.log(props)

  return (
    <React.Fragment>
      <List>
        <InnerList>
          <Grid margin="10px 0px">
            <Text>{props.nickname}</Text>
          </Grid>
          <Grid>
            <Text>{props.content}</Text>
          </Grid>
        </InnerList>
      </List>
    </React.Fragment>
  )
}

const List = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
  padding: 0px;
`

const InnerList = styled.div`
  margin: 10px 0px;
`

export default CommentList
