import React from "react";
import {
  Box,
  Card as MaterialCard,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import GradeIcon from "@material-ui/icons/Grade";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

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
          subheader={d.qualificationType}
          titleTypographyProps={{
            variant: "h6",
            component: "h2",
            style: { lineHeight: 1.1 },
          }}
          style={{ paddingBottom: 0 }}
          action={
            d.certUrl ? (
              <IconButton
                disabled={d.certUrl ? false : true}
                onClick={() => window.open(d.certUrl, "_blank")}
              >
                <PictureAsPdfIcon />
              </IconButton>
            ) : null
          }
        />

        <CardContent className={classes.cardContent}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Content icon={<LocationCityIcon />}>
                <Typography>
                  {d.name}, {d.location}
                </Typography>
              </Content>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Content icon={<AccessTimeIcon />}>
                <Typography>
                  {d.started} {String.fromCharCode(8594)}{" "}
                  {d.finished ? d.finished : "ad oggi"}
                </Typography>
              </Content>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Content icon={<GradeIcon />}>
                <Typography>
                  {d.grade ? `${d.grade}/${d.maxGrade}` : "n.d."}
                </Typography>
              </Content>
            </Grid>
          </Grid>
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

        {d.otherActivities && (
          <CardContent className={classes.cardContent}>
            <Typography>
              <b>Altre attività:</b>
            </Typography>
            <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
              {d.otherActivities}
            </Typography>
          </CardContent>
        )}
      </MaterialCard>
    </Box>
  );
}
