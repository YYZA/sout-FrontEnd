import React from 'react'
import styled from 'styled-components'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { actionCreators as commentActions } from '../redux/modules/comment'
import { Button, Grid, Input, Text } from '../elements'
import { useDispatch, useSelector } from 'react-redux'

const CommentList = (props) => {
  const state = useSelector((state) => state.user.user.email)
  const isMe = state === props.email
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <List>
        <InnerList>
          <Grid margin="10px 0px" side_flex width="100%">
            <Text>{props.nickname}</Text>
            {isMe && (
              <DeleteForeverIcon
                onClick={() => {
                  dispatch(
                    commentActions.deleteCommentDB(
                      props.postId,
                      props.commentId
                    )
                  )
                }}
                sx={{ color: '#ddc6b6', cursor: 'pointer' }}
              />
            )}
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
  width: 100%;
`

export default CommentList
