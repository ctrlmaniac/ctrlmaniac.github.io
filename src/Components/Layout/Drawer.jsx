import React from "react";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { AvatarMe, AdapterLink } from "src/Components";

// Icons
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import ReceiptIcon from "@material-ui/icons/Receipt";
import WorkIcon from "@material-ui/icons/Work";

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginRight: theme.spacing(2),
  },
  drawerPaper: {
    width: 250,
  },
}));

const ListItemLink = (props) => {
  return <ListItem button component={AdapterLink} {...props} />;
};

export function AppDrawer(props) {
  const classes = useStyles();
  let { open = false, handleClose = () => true } = props;

  return (
    <Drawer open={open} onClose={handleClose}>
      <div
        role="presentation"
        className={classes.drawerPaper}
        onClick={handleClose}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <AvatarMe />
            </ListItemIcon>
            <ListItemText>
              <b>Davide Di Criscito</b>
            </ListItemText>
          </ListItem>

          <Divider />

          <ListItemLink to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemLink>

          <ListItemLink to="/esperienze">
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Esperienze Lavorative" />
          </ListItemLink>

          <ListItemLink to="/formazione">
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Formazione" />
          </ListItemLink>

          <ListItemLink to="/certificati">
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Certificati" />
          </ListItemLink>
        </List>
      </div>
    </Drawer>
  );
}
