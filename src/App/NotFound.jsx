import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(4),
    textAlign: "center",
  },
}));

export function NotFound(props) {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Typography style={{ fontSize: 100 }}>
        <span role="img" aria-label="emoji eyes">
          👀
        </span>
      </Typography>
      <Typography>No, qui non c'è niente!</Typography>
    </Box>
  );
}
