<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import { Button, Grid, Input } from "../elements";
import axios from "axios";
import { useDispatch } from "react-redux";
import { actionCreators as commentCreators } from "../redux/modules/comment";

const CommentWrite = (props) => {
  const [content, setCotentText] = React.useState();
  const dispatch = useDispatch();
=======
import React from 'react'
import styled from 'styled-components'
import { Button, Grid, Input } from '../elements'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators as commentCreators } from '../redux/modules/comment'

const CommentWrite = (props) => {
  const [content, setCotentText] = React.useState()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
>>>>>>> ad47fb0efea02902e507f91525a062bdc11d6ef2
  const onChange = (e) => {
    setCotentText(e.target.value);
  };

  // const addComment = () => {
  //   axios.post("/comment", { content: content }).then((res) => {
  //     console.log(res);
  //   });
  // };

  return (
    <React.Fragment>
      <List>
        <Input
          type="submit"
          width="100%"
          placeholder="댓글 내용을 입력해주세요 :)"
          _onChange={onChange}
        />
        <Button
          width="10%"
          height="50px"
          _onClick={() => {
<<<<<<< HEAD
            dispatch(commentCreators.addCommentDB(`${props.postId}`, content));
=======
            dispatch(
              commentCreators.addCommentDB(
                `${props.postId}`,
                content,
                user.nickname
              )
            )
>>>>>>> ad47fb0efea02902e507f91525a062bdc11d6ef2
          }}
        >
          작성✏️
        </Button>
      </List>
    </React.Fragment>
  );
};

const List = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
`;

export default CommentWrite;
