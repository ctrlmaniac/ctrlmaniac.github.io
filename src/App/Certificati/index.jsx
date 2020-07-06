import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { AppHeader } from "src/Components";

export function Certificati(props) {
  return (
    <React.Fragment>
      <AppHeader>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1">
            Certificati e Licenze
          </Typography>
        </Container>
      </AppHeader>

      <Box pt={4}>
        <Container maxWidth="md">lulu</Container>
      </Box>
    </React.Fragment>
  );
}
