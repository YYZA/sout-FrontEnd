import React from "react";
import { Button, Grid, Input, Text } from "../elements";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CommentWrite from "./CommentWrite";
import { history } from "../redux/configureStore";
import { getCookie } from "../shared/Cookie";
import { actionCreators } from "../redux/modules/post";

const Main = (props) => {
  let cookie = getCookie("x_auth");
  const is_login = useSelector((state) => state.user.is_login);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  console.log(user.username);

  return (
    <React.Fragment>
      {!cookie && !is_login ? (
        <Grid
          border="1px solid"
          bg="#262223"
          radius="5px"
          height="100%"
          width="50vw"
          margin="20px auto"
          min_height="50%"
          min_width="90%"
          padding="0px 0px"
        >
          <Grid padding="16px">
            <Grid width="auto">
              <div style={{ display: "flex", alignItems: "center" }}>
                <ImageCircle src={props.user_image} />
                <Text bold>
                  {props.nickname} / {props.interest}
                </Text>
              </div>
            </Grid>
            <hr style={{ width: "100%", margin: "5px 0px" }} />
            <Grid width="auto" margin="10px 0px">
              <Text>{props.modifiedAt}</Text>
            </Grid>
          </Grid>
          <Grid padding="30px 16px" width="100%" height="60%">
            <Text bold size="36px">
              {props.content}
            </Text>
            <link href={props.url} />
          </Grid>
        </Grid>
      ) : (
        <Grid
          border="1px solid"
          bg="#262223"
          radius="5px"
          height="100%"
          max_width="50vw"
          margin="20px auto"
          min_height="50%"
          min_width="90%"
          padding="0px 0px"
        >
          <Grid padding="16px">
            <Grid width="auto">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ImageCircle src={props.user_image} />
                  <Text bold>
                    {props.nickname}/ {props.interest}
                  </Text>
                </div>
                <div>
                  <DeleteCircle
                    onClick={() => {
                      dispatch(actionCreators.deletePostDB(`${props.postId}`));
                    }}
                  >
                    Delete
                  </DeleteCircle>
                  <EditCircle
                    onClick={() => {
                      history.push({
                        pathname: "/edit",
                        props: { props },
                      });
                    }}
                  >
                    Edit
                  </EditCircle>
                </div>
              </div>
            </Grid>
            <hr style={{ width: "100%", margin: "5px 0px" }} />
            <Grid width="auto" margin="10px 0px">
              <Text>{props.modifiedAt}</Text>
            </Grid>
          </Grid>
          <Grid padding="30px 16px" width="100%" height="60%">
            <Text bold size="36px">
              {props.content}
            </Text>
            <link href={props.url} />
          </Grid>
          <Grid padding="0px 16px">
            <CommentWrite {...props}></CommentWrite>
            <hr style={{ width: "100%", margin: "5px 0px" }} />
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

Main.defaultProps = {
  comment: "",
  user_name: "",
  interest: "",
  content: "",
  modifiedAt: "",
  url: "",
  user_image:
    "data:image/jpeg;base64,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",
};

const ImageCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;
const EditCircle = styled.button`
  font-weight: 900;
  width: 50px;
  height: 20px;
  padding-bottom: 10px;
  border-radius: 5px;
  margin: 4px;
  color: blue;
  background: #fff;
`;

const DeleteCircle = styled.button`
  font-weight: 900;
  width: 50px;
  height: 20px;
  padding-bottom: 10px;
  border-radius: 5px;
  margin: 4px;
  color: red;
  background: #fff;
`;

export default Main;
