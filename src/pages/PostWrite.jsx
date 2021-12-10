import React, { useEffect } from "react";
import { Input, Button, Grid } from "../elements/index";
import { useDispatch } from "react-redux";
import { actionCreators } from "../redux/modules/post";
import { getCookie } from "../shared/Cookie";

const PostWrite = (props) => {
  const [content, setContent] = React.useState("");
  const [url, setUrl] = React.useState("");
  const dispatch = useDispatch();
  const cookie = getCookie("x_auth");

  useEffect(() => {
    if (!cookie) {
      alert("로그인 후 이용해주세요.");
      window.location.href = "/";
    }
  }, []);

  return (
    <React.Fragment>
      <Grid
        border="1px solid"
        bg="#fff"
        radius="5px"
        height="100%"
        max_width="50vw"
        margin="5vw auto 12vw auto"
        min_height="50%"
        min_width="360px"
        padding="30px 10px"
      >
        <Input
          _onChange={(e) => {
            setContent(e.target.value);
          }}
          multiLine
          label="내용"
          placeholder="자신의 이야기를 입력해주세요 :)"
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
            dispatch(actionCreators.addPostDB(content, url));
          }}
          color="#262223"
          bg="#ddc6b6"
          padding="10px 20px"
          width="100%"
        >
          작성하기
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
