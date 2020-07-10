import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { AppHeader } from "src/Components";

export function Esperienze(props) {
  return (
    <React.Fragment>
      <AppHeader>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1">
            Esperienze Lavorative
          </Typography>
        </Container>
      </AppHeader>

      <Box pt={4}>
        <Container maxWidth="md">ciao</Container>
      </Box>
    </React.Fragment>
  );
}
