import React, { useEffect } from "react";
import { Grid } from "../elements";
import Infinity from "../components/Infinity";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/modules/post";
import axios from "axios";
import { getCookie } from "../shared/Cookie";
import { userActions } from "../redux/modules/user";

const Main = (props) => {
  const post_list = useSelector((state) => state);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const is_loading = useSelector((state) => state.post.is_loading);
  const size = useSelector((state) => state.post.size);
  useEffect(() => {
    dispatch(actionCreators.getPostDB(size));
    const cookie = getCookie("x_auth");
    const fetchUser = async () => {
      await axios
        .post(
          "http://localhost:8080/userinfo",
          {},
          {
            headers: { Authorization: cookie },
          }
        )
        .then((res) => {
          dispatch(userActions.setUser(res.data));
        });
    };
    if (user.length === 0 && cookie !== undefined) {
      fetchUser();
    }
  }, []);

  return (
    <React.Fragment>
      <Grid flex>
        <Infinity
          callNext={() => {
            let sizeP = size + 1;
            console.log(sizeP);
            dispatch(actionCreators.getPostDB(sizeP));
          }}
          is_loading={is_loading}
        >
          {post_list.post.list.map((p, idx) => {
            if (p.email === user.username) {
              return (
                <Grid key={idx}>
                  <Post {...p} is_me />
                </Grid>
              );
            } else {
              return (
                <Grid key={idx}>
                  <Post {...p} />
                </Grid>
              );
            }
          })}
        </Infinity>
      </Grid>
    </React.Fragment>
  );
};

export default Main;
