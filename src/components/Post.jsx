import React from "react";
import { Button, Grid, Input, Text } from "../elements";
import UiButton from "@mui/material/Button";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CommentWrite from "./CommentWrite";
import CommentList from "./CommentList";
import { history } from "../redux/configureStore";
import { getCookie } from "../shared/Cookie";
import { actionCreators } from "../redux/modules/post";
import OpengraphReactComponent from "opengraph-react";

const Main = (props) => {
  let cookie = getCookie("x_auth");
  const authSession = sessionStorage.getItem("x_auth");
  const is_login = useSelector((state) => state.user.is_login);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      {!(cookie || authSession) ? (
        <Grid
          border="1px solid"
          bg="#ddd"
          radius="5px"
          height="100%"
          max_width="50vw"
          margin="20px auto"
          min_height="50%"
          min_width="360px"
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
                  <Text color="black" bold>
                    {props.nickname}/ {props.interest}
                  </Text>
                </div>
              </div>
            </Grid>
            <hr style={{ width: "100%", margin: "5px 0px" }} />
            <Grid width="auto" margin="10px 0px">
              <Text color="black">{props.modifiedAt}</Text>
            </Grid>
          </Grid>
          <Grid padding="30px 16px" width="100%" height="60%">
            <Text color="black" bold size="36px">
              {props.content}
            </Text>
            {/* <OpengraphReactComponent
              site={props.url}
              appId={"1aba8b2f-e731-40c6-b6fc-015032e76ed7	"}
              loader={"loading"}
              size={"small"}
            /> */}
            <hr style={{ width: "100%", margin: "5px 0px" }} />
            {props.commentList.length === 0
              ? ""
              : props.commentList.map((el, i) => {
                  return (
                    <CommentList
                      postId={props.postId}
                      key={i}
                      {...el}
                    ></CommentList>
                  );
                })}
          </Grid>
        </Grid>
      ) : (
        <Grid
          border="1px solid"
          bg="#ddd"
          radius="5px"
          height="100%"
          max_width="50vw"
          margin="20px auto"
          min_height="50%"
          min_width="360px"
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
                  <Text color="black" bold>
                    {props.nickname}/ {props.interest}
                  </Text>
                </div>
                {props.is_me && (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ margin: "0px 5px" }}>
                      <UiButton
                        size="small"
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          dispatch(
                            actionCreators.deletePostDB(`${props.postId}`)
                          );
                        }}
                      >
                        Delete
                      </UiButton>
                    </div>
                    <div>
                      <UiButton
                        size="small"
                        variant="outlined"
                        onClick={() => {
                          history.push({
                            pathname: "/edit",
                            state: { state: props },
                          });
                        }}
                      >
                        Edit
                      </UiButton>
                    </div>
                  </div>
                )}
              </div>
            </Grid>
            <hr style={{ width: "100%", margin: "5px 0px" }} />
            <Grid width="auto" margin="10px 0px">
              <Text color="black">{props.modifiedAt}</Text>
            </Grid>
          </Grid>
          <Grid padding="30px 16px" width="100%" height="60%">
            <Text color="black" bold size="36px">
              {props.content}
            </Text>
            {/* <OpengraphReactComponent
              site={props.url}
              appId={"1aba8b2f-e731-40c6-b6fc-015032e76ed7	"}
              loader={"loading"}
              size={"small"}
            /> */}
          </Grid>
          <Grid padding="0px 16px">
            <CommentWrite {...props}></CommentWrite>
            <hr style={{ width: "100%", margin: "5px 0px" }} />
            {props.commentList.length === 0
              ? ""
              : props.commentList.map((el, i) => {
                  return (
                    <CommentList
                      postId={props.postId}
                      key={i}
                      {...el}
                    ></CommentList>
                  );
                })}
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

Main.defaultProps = {
  email: "",
  interest: "",
  content: "",
  modifiedAt: "",
  url: "",
  user_image: "https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927",
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
