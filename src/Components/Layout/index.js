import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { AppDrawer } from "./Drawer";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export function Layout(props) {
  let { children } = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <AppDrawer open={open} handleClose={() => setOpen(false)} />

      <main>
        <div className={classes.offset} />
        {children}
      </main>
    </React.Fragment>
  );
}
