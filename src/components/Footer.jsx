import React from "react";
import { Input, Button, Grid, Text } from "../elements/index";

const Footer = (props) => {
  return (
    <React.Fragment>
      <Grid bg="#262223" height="10vh">
        <Grid flex margin="30px">
          <Text>
            <a>ss</a>Front-End git repo
          </Text>
        </Grid>
        <Grid margin="30px">
          <Text>Back-End git repo</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Footer;
