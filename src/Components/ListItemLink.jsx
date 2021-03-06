import React from "react";
import { ListItem } from "@material-ui/core";
import { AdapterLink } from "./AdapterLink";

export function ListItemLink(props) {
  const { handleClose, ...rest } = props;
  return (
    <span onClick={handleClose}>
      <ListItem button component={AdapterLink} {...rest} />
    </span>
  );
}
