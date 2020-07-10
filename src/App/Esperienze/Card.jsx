import React from "react";
import {
  Box,
  Card as MaterialCard,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: 0,
  },
  icon: {
    flex: "0 0 auto",
    marginRight: 16,
  },
  content: {
    flex: "1 1 auto",
  },
  offset: {
    marginLeft: 40,
  },
  card: {
    paddingBottom: 16,
  },
  cardContent: {
    paddingTop: 8,
    paddingBottom: 0,
    "&:last-child": {
      paddingTop: 8,
      paddingBottom: 0,
    },
  },
}));

const Content = ({ icon, children, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {icon && <div className={classes.icon}>{icon}</div>}
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export function Card({ dettagli: d, ...rest }) {
  const classes = useStyles();

  return (
    <Box {...rest}>
      <MaterialCard className={classes.card}>
        <CardHeader
          title={d.qualification}
          subheader={d.business}
          titleTypographyProps={{
            variant: "h6",
            component: "h2",
            style: { lineHeight: 1.1 },
          }}
          style={{ paddingBottom: 0 }}
        />

        <CardContent className={classes.cardContent}>
          <Content icon={<LocationCityIcon />}>
            <Typography>{d.location}</Typography>
          </Content>
          <Content icon={<AccessTimeIcon />}>
            <Typography>
              {d.started} {String.fromCharCode(8594)}{" "}
              {d.finished ? d.finished : "ad oggi"}
            </Typography>
          </Content>
        </CardContent>

        {d.description && (
          <CardContent className={classes.cardContent}>
            <Typography>
              <b>Descrizione:</b>
            </Typography>
            <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
              {d.description}
            </Typography>
          </CardContent>
        )}
      </MaterialCard>
    </Box>
  );
}
