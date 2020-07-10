import React from "react";
import { filter } from "lodash";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";

export function Esperienze({ lista, ...rest }) {
  const history = useHistory();
  const pinned = filter(lista, (d) => d.pinned);

  return (
    <Card>
      <CardHeader
        avatar={<WorkIcon />}
        title="Esperienze"
        titleTypographyProps={{ variant: "h6" }}
      />
      <CardContent style={{ paddingTop: 0 }}>
        <List style={{ paddingTop: 0, paddingBottom: 0 }}>
          {pinned.map((f, i) => (
            <React.Fragment key={i}>
              <Divider />
              <ListItem>
                <ListItemText
                  primary={f.qualification}
                  secondary={f.business}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/esperienze")}
        >
          Altro
        </Button>
      </CardActions>
    </Card>
  );
}
