import React from 'react'
import styled from 'styled-components'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { actionCreators as commentActions } from '../redux/modules/comment'
import { Button, Grid, Input, Text } from '../elements'
import { useDispatch, useSelector } from 'react-redux'

const CommentList = (props) => {
  const state = useSelector((state) => state.user.user)
  const isMe = state?.email === props.email || state?.username === props.email
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <List>
        <InnerList>
          <CommentStyle margin="10px 0px" width="100%">
            <CommentProfile>
              <ImageCircle src={props.user_image} />
              <Text color="black">{props.nickname} : </Text>
              <Text color="black">{props.content}</Text>
            </CommentProfile>
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
                sx={{ color: 'red', cursor: 'pointer' }}
              />
            )}
          </CommentStyle>
        </InnerList>
      </List>
    </React.Fragment>
  )
}

CommentList.defaultProps = {
  user_image: 'https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927',
}

const CommentStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CommentProfile = styled.div`
  display: flex;
  align-items: center;
`

const ImageCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 4px;
`

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
