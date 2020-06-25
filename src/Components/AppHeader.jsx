import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  innerBox: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

export function AppHeader(props) {
  let { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Box {...rest}>
      <Box className={classes.innerBox}>{children}</Box>
    </Box>
  );
}
