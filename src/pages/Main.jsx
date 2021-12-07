import axios from "axios";
import { useEffect } from "react";
import { Button, Grid, Input, Text } from "../elements";
import Post from "../components/Post";

const Main = (props) => {
  // useEffect(() => {
  //   axios.post('/newpost', { content: 'asd', url: 'asd' }).then((res) => {
  //     console.log(res)
  //   })
  // })

  return (
    <>
      <Grid flex>
        <Post />
      </Grid>
    </>
  );
};

export default Main;
