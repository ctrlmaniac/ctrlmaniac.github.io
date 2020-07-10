import React from "react";
import {
  Box,
  Card as MaterialCard,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  content: {
    paddingBottom: 16,
    "&:last-child": {
      paddingBottom: 16,
    },
  },
  actions: {
    padding: 16,
    paddingTop: 0,
  },
  overline: {
    marginBottom: 0,
    lineHeight: 1.1,
  },
});

const dateStr = (date) => {
  const mesi = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];

  const arrDate = date.split("-");
  const mese = mesi[parseInt(arrDate[1])];

  return `${mese} ${arrDate[0]}`;
};

export function Card({ dettagli: d, ...rest }) {
  const classes = useStyles();

  return (
    <Box {...rest}>
      <MaterialCard>
        <CardContent className={classes.content}>
          <Typography
            variant="overline"
            className={classes.overline}
            color="textSecondary"
            gutterBottom
          >
            {d.provider}
          </Typography>
          <Typography variant="h5" component="h2">
            {d.name}
          </Typography>
          <Typography color="textSecondary">
            Emissione: {dateStr(d.issuing)}{" "}
            {d.expiration && ` - Scadenza: ${dateStr(d.issuing)}`}
          </Typography>
        </CardContent>
        {d.certUrl && (
          <CardActions className={classes.actions}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => window.open(d.certUrl, "_blank")}
            >
              certificato
            </Button>
          </CardActions>
        )}
      </MaterialCard>
    </Box>
  );
}
