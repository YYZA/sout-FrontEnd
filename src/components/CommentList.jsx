import React from 'react'
import styled from 'styled-components'
import { Button, Grid, Input, Text } from '../elements'

const CommentList = (props) => {
  let comment_list = props.commentList
  console.log(props)

  return (
    <React.Fragment>
      <List>
        <div style={{ color: '#ddc6b6' }}>
          <div></div>
          <Text>{props.nickname}</Text>
          <Text>{props.content}</Text>
        </div>
      </List>
    </React.Fragment>
  )
}

const List = styled.div`
  display: flex;
  padding: 0px;
`

export default CommentList
