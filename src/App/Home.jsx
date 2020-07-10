import React from "react";
import { useSelector } from "react-redux";
import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AvatarMe, SocialBox, AppHeader } from "src/Components";

// Widgets
import { Formazione, Certificati, Esperienze } from "src/Widgets";

const useStyles = makeStyles((theme) => ({
  headerBox: {
    textAlign: "center",
  },
  avatar: {
    margin: "0 auto",
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export function Home(props) {
  const classes = useStyles();
  let { me, formazione, certificati, esperienze } = useSelector(
    (state) => state
  );

  return (
    <React.Fragment>
      <AppHeader className={classes.headerBox}>
        <AvatarMe large centered progressColor="secondary" />

        <Typography variant="h6" component="h1">
          {me.first_name} {me.last_name}
        </Typography>
        <Typography>{me.location}</Typography>

        <SocialBox socials={me.socials} />
      </AppHeader>

      <Box mt={4}>
        <Container maxWidth="md">
          <Box mb={4}>
            <Esperienze lista={esperienze} />
          </Box>

          <Box mb={4}>
            <Formazione lista={formazione} />
          </Box>

          <Box mb={4}>
            <Certificati lista={certificati} />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
