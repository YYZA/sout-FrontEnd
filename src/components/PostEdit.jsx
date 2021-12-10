import React from "react";
import { Input, Button, Grid } from "../elements/index";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/modules/post";
import { history } from "../redux/configureStore";
import styled from "styled-components";

const PostEdit = (props) => {
  const [content, setContent] = React.useState("");
  const [url, setUrl] = React.useState(props.location.state.state.url);
  const [content_ex, setContentEx] = React.useState(
    props.location.state.state.content
  );
  const dispatch = useDispatch();
  let post_id = props.location.state.state.postId;

  console.log(content_ex);

  return (
    <React.Fragment>
      <Grid
        border="1px solid"
        bg="#fff"
        radius="5px"
        height="100%"
        max_width="50vw"
        margin="5vw auto 5vw auto"
        min_height="50%"
        min_width="360px"
        padding="30px 10px"
      >
        <TextBox
          onChange={(e) => {
            setContentEx(e.target.value);
          }}
          rows={20}
          multiLine
          label="내용"
          value={content_ex}
        ></TextBox>
        <InputBox
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          label="업로드 링크"
          value={url}
        ></InputBox>
        <Button
          _onClick={() => {
            history.replace("/");
            dispatch(actionCreators.editPostDB(content_ex, url, post_id));
          }}
          color="#262223"
          bg="#ddc6b6"
          padding="10px 20px"
          width="100%"
        >
          수정하기
        </Button>
      </Grid>
    </React.Fragment>
  );
};

const TextBox = styled.textarea`
  border-radius: 5px;
  margin: 10px 0px;
  border: 1px solid #ddc6b6;
  width: 100%;
  padding: 16px 10px;
  box-sizing: border-box;
`;
const InputBox = styled.input`
  border-radius: 5px;
  margin: 10px 0px;
  border: 1px solid #ddc6b6;
  width: 100%;
  padding: 16px 10px;
  box-sizing: border-box;
`;

export default PostEdit;
