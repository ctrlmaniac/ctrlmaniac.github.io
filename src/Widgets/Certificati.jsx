import React from "react";
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
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import ReceiptIcon from "@material-ui/icons/Receipt";
import DescriptionIcon from "@material-ui/icons/Description";

export function Certificati({ lista, ...rest }) {
  const history = useHistory();

  return (
    <Card>
      <CardHeader
        avatar={<ReceiptIcon />}
        title="Certificati"
        titleTypographyProps={{ variant: "h6" }}
      />
      <CardContent style={{ paddingTop: 0 }}>
        <List style={{ paddingTop: 0, paddingBottom: 0 }}>
          {lista.slice(0, 3).map((c, i) => (
            <React.Fragment key={i}>
              <Divider />
              <ListItem>
                <ListItemText primary={c.name} secondary={c.provider} />
                {c.certUrl && (
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      onClick={() => window.open(c.certUrl, "_blank")}
                    >
                      <DescriptionIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                )}
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
          onClick={() => history.push("/certificati")}
        >
          Altro
        </Button>
      </CardActions>
    </Card>
  );
}
