import React from "react";
import styled from "styled-components";
import { Button, Grid, Input } from "../elements";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentCreators } from "../redux/modules/comment";

const CommentWrite = (props) => {
  const [content, setCotentText] = React.useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const onChange = (e) => {
    setCotentText(e.target.value);
  };

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
            dispatch(
              commentCreators.addCommentDB(
                `${props.postId}`,
                content,
                user.nickname
              )
            );
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
