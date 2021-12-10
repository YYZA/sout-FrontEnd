import React from "react";
import { Input, Button, Grid } from "../elements/index";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/modules/post";
import { history } from "../redux/configureStore";

const PostEdit = (props) => {
  const [content, setContent] = React.useState("");
  const [url, setUrl] = React.useState("");
  const dispatch = useDispatch();
  console.log(props);
  let post_id = props.location.state.props.postId;
  let content_ex = props.location.state.props.content;

  return (
    <React.Fragment>
      <Grid
        radius="5px"
        shadow
        flex
        width="80%"
        margin="10vh auto"
        border="1px solid black"
        padding="50px"
        bg="#262223"
      >
        <Input
          _onChange={(e) => {
            setContent(e.target.value);
          }}
          multiLine
          label="내용"
          placeholder={content_ex}
        ></Input>
        <Input
          _onChange={(e) => {
            setUrl(e.target.value);
          }}
          label="업로드 링크"
          placeholder="도움이 되는 링크를 공유해주세요!"
        ></Input>
        <Button
          _onClick={() => {
            history.replace("/");
            dispatch(actionCreators.editPostDB(content, url, post_id));
          }}
          color="#262223"
          bg="#ddc6b6"
          padding="10px 20px"
        >
          수정하기
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostEdit;
