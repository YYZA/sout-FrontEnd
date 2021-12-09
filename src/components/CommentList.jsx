import React from "react";
import styled from "styled-components";
import { Button, Grid, Input, Text } from "../elements";

const CommentWrite = (props) => {
  let comment_list = props.commentList;

  return (
    <React.Fragment>
      <List>
        {comment_list.map((p, idx) => {
          console.log(p);
          return (
            <div style={{ color: "#ddc6b6" }} key={idx}>
              <div></div>
              <Text>{p.nickname}</Text>
              <Text>{p.content}</Text>
            </div>
          );
        })}
      </List>
    </React.Fragment>
  );
};

const List = styled.div`
  display: flex;
  padding: 0px;
`;

export default CommentWrite;
