import React from "react";
import styled from "styled-components";
import { Button, Grid, Input } from "../elements";
import axios from "axios";
import { useDispatch } from "react-redux";
import { actionCreators as commentCreators } from "../redux/modules/comment";

const CommentWrite = (props) => {
  const [content, setCotentText] = React.useState();
  const dispatch = useDispatch();
  const onChange = (e) => {
    setCotentText(e.target.value);
  };
  console.log(props);

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
          _onClick={() => {
            window.location.reload();
            dispatch(commentCreators.addCommentDB(`${props.postId}`, content));
          }}
        >
          <span style={{ fontSize: "20px" }}>
            <u>✏️</u>
          </span>
        </Button>
      </List>
    </React.Fragment>
  );
};

const List = styled.div`
  display: flex;
  padding: 0px;
`;

export default CommentWrite;
