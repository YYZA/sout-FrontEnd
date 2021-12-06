import React from "react";
import GitHubIcon from "@material-ui/icons";

import { Input, Button, Grid, Text } from "../elements/index";
import styled from "styled-components";

const Footer = (props) => {
  return (
    <React.Fragment>
      <Fixed>
        <Grid bg="#262223" height="10vh">
          <Grid flex margin="30px">
            <Text>Front-End git repo</Text>
          </Grid>
          <Grid margin="30px">
            <Text>Back-End git repo</Text>
          </Grid>
        </Grid>
      </Fixed>
    </React.Fragment>
  );
};

const Fixed = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default Footer;
