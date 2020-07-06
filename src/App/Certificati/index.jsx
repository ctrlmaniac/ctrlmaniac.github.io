import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography, Box } from "@material-ui/core";
import { AppHeader } from "src/Components";
import { Card } from "./Card";

export function Certificati(props) {
  let { certificati } = useSelector((state) => state);

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
        <Container maxWidth="md">
          {certificati.map((f, i) => (
            <Card dettagli={f} key={i} mb={4} />
          ))}
        </Container>
      </Box>
    </React.Fragment>
  );
}
